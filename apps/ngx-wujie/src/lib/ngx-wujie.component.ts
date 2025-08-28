import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { startApp, destroyApp } from 'wujie';

@Component({
  selector: 'wujie-angular',
  standalone: true,
  template: `<div #container></div>`,
  styles: ``
})
export class NgxWujieComponent implements AfterViewInit, OnDestroy {
  @ViewChild('container', { static: true }) containerRef!: ElementRef<HTMLElement>;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) url!: string;

  ngAfterViewInit(): void {
    this.start();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  private start(): void {
    if (!this.containerRef?.nativeElement || !this.name || !this.url) return;

    startApp({
      name: this.name,
      url: this.url,
      el: this.containerRef.nativeElement
    });
  }

  private destroy(): void {
    if (this.name) {
      try {
        destroyApp(this.name);
      } catch { }
    }
  }
}
