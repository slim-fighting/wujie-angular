import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { startApp, destroyApp, plugin, loadErrorHandler } from 'wujie';
import { lifecycle } from 'wujie/esm/sandbox';

@Component({
  selector: 'wujie-angular',
  standalone: true,
  imports: [],
  template: `
    <div #container></div>
  `,
  styles: ``
})
export class NgxWujieComponent implements AfterViewInit, OnChanges, OnDestroy {

  @ViewChild('container', { static: true }) containerRef!: ElementRef<HTMLElement>;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) url!: string;

  @Input() width?: string;
  @Input() height?: string;
  @Input() loading?: HTMLElement;
  @Input() sync?: boolean = false;
  @Input() prefix?: { [key: string]: string; };
  @Input() alive?: boolean = false;
  @Input() props?: { [key: string]: unknown };
  @Input() replace?: (code: string) => string;
  @Input() fetch?: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
  @Input() fiber?: boolean = true;
  @Input() attrs?: Record<string, string>;
  @Input() degrade?: boolean = false;
  @Input() plugins?: Array<plugin>;
  @Input() exec?: boolean;
  @Input() iframeAddEventListeners?: Array<string>;
  @Input() iframeOnEvents?: Array<string>;

  @Input() beforeLoad?: lifecycle;
  @Input() beforeMount?: lifecycle;
  @Input() afterMount?: lifecycle;
  @Input() beforeUnmount?: lifecycle;
  @Input() afterUnmount?: lifecycle;
  @Input() activated?: lifecycle;
  @Input() deactivated?: lifecycle;
  @Input() loadError?: loadErrorHandler;

  @Output() mounted = new EventEmitter<void>();
  @Output() unmounted = new EventEmitter<void>();
  @Output() error = new EventEmitter<unknown>();

  private hasMounted = false;

  private buildStartOptions(el?: HTMLElement) {
    return {
      name: this.name,
      url: this.url,
      el: el ?? this.containerRef?.nativeElement,
      props: this.props,
      attrs: this.attrs,
      replace: this.replace,
      sync: this.sync,
      prefix: this.prefix,
      alive: this.alive,
      fiber: this.fiber,
      degrade: this.degrade,
      loading: this.loading,
      fetch: this.fetch,
      iframeAddEventListeners: this.iframeAddEventListeners,
      iframeOnEvents: this.iframeOnEvents,
      plugins: this.plugins,
      beforeLoad: this.beforeLoad,
      beforeMount: this.beforeMount,
      afterMount: this.afterMount,
      beforeUnmount: this.beforeUnmount,
      afterUnmount: this.afterUnmount,
      activated: this.activated,
      deactivated: this.deactivated,
      loadError: this.loadError,
    };
  }

  private remount(): void {
    if (!this.containerRef || !this.name || !this.url) return;
    this.destroy();
    this.start();
  }

  private hotUpdate(): void {
    try {
      const el = this.containerRef?.nativeElement;
      startApp(this.buildStartOptions(el));
    } catch (err) {
      console.error('[wujie-angular] hotUpdate error:', err);
      this.error.emit(err);
    }
  }

  private start(): void {
    if (!this.containerRef || !this.name || !this.url) return;

    const el = this.containerRef.nativeElement;
    try {
      startApp(this.buildStartOptions(el));
    } catch (err) {
      console.error('[wujie-angular] start [${this.name}] error:', err);
      this.error.emit(err);
      return;
    }

    this.hasMounted = true;
  }

  private destroy(): void {
    try {
      if (this.name) {
        destroyApp(this.name)
      };
    } catch (err) {
      console.error(`[wujie-angular] destroy [${this.name}] error:`, err);
    }
    this.hasMounted = false;
  }
  ngAfterViewInit(): void {
    this.start();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.hasMounted) return;

    const nameOrUrlChanged = !!(changes['name'] || changes['url']);
    const behaviorChanged = !!(changes['replace'] || changes['fetch'] || changes['plugins'] || changes['fiber'] || changes['degrade'] || changes['sync'] || changes['prefix']);
    const propsChanged = !!(changes['props'] || changes['attrs']);
    const aliveChanged = !!changes['alive'];

    if (nameOrUrlChanged) {
      this.remount();
      return;
    }

    if (aliveChanged) {
      if (this.alive === false) {
        this.remount();
        return;
      } else {
        this.hotUpdate();
        return;
      }
    }

    if (propsChanged || behaviorChanged) {
      if (this.alive) {
        this.hotUpdate();
      } else {
        this.remount();
      }
      return;
    }
  }

  ngOnDestroy(): void {
    if (!this.alive) {
      this.destroy();
    }
  }

}
