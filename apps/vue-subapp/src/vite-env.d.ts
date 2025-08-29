/// <reference types="vite/client" />

export { };

declare global {
    interface WujieProps {
        jump: (target: string) => void;
        [key: string]: unknown;
    }

    interface Window {
        $wujie?: {
            props: WujieProps;
            [key: string]: unknown;
        };
        __WUJIE_MOUNT: () => void;
        __WUJIE_UNMOUNT: () => void | Promise<void>;
        __POWERED_BY_WUJIE__?: boolean;
    }
}
