import * as React from "react";
/**
 * The responder takes its inspiration from react-native's
 * pan-responder. Learn more about react-native's
 * system here:
 *
 * https://facebook.github.io/react-native/docs/gesture-responder-system.html
 *
 * Basic usage:
 *
 * const bind = useGestureResponder({
 *  onStartShouldSet: () => true,
 *  onGrant: () => highlight(),
 *  onMove: () => updatePosition(),
 *  onRelease: () => unhighlight(),
 *  onTerminate: () => unhighlight()
 * })
 *
 * The main benefit this provides is the ability to reconcile
 * multiple gestures, and give priority to one.
 *
 * You can use a combination of useStartShouldSet, useStartShouldSetCapture,
 * onMoveShouldSetCapture, and onMoveShouldSet to dictate
 * which gets priority.
 *
 * Typically you'd want to avoid capture since it's generally
 * preferable to have child elements gain touch access.
 */
export declare type ResponderEvent = React.TouchEvent | React.MouseEvent | Event;
export declare type CallbackQueryType = (state: StateType, e: ResponderEvent) => boolean;
export declare type CallbackType = (state: StateType, e: ResponderEvent) => void;
export interface Callbacks {
    onStartShouldSetCapture?: CallbackQueryType;
    onStartShouldSet?: CallbackQueryType;
    onMoveShouldSetCapture?: CallbackQueryType;
    onMoveShouldSet?: CallbackQueryType;
    onGrant?: CallbackType;
    onMove?: CallbackType;
    onRelease?: CallbackType;
    onTerminate?: (state: StateType, e?: ResponderEvent) => void;
    onTerminationRequest?: (state: StateType, e?: ResponderEvent) => boolean;
}
export interface StateType {
    time: number;
    xy: [number, number];
    delta: [number, number];
    initial: [number, number];
    previous: [number, number];
    direction: [number, number];
    initialDirection: [number, number];
    local: [number, number];
    lastLocal: [number, number];
    velocity: number;
    distance: number;
}
interface Config {
    uid?: string;
    enableMouse?: boolean;
}
export interface GrantedTouch {
    id: string | number;
    onTerminationRequest: (e?: ResponderEvent) => void;
    onTerminate: (e?: ResponderEvent) => void;
}
export declare function useGestureResponder(options?: Callbacks, config?: Config): {
    bind: {
        onMouseDown: (e: React.MouseEvent<Element, MouseEvent>) => void;
        onMouseDownCapture: (e: React.MouseEvent<Element, MouseEvent>) => void;
        onTouchStart: (e: ResponderEvent) => void;
        onTouchEnd: (e: ResponderEvent) => void;
        onTouchMove: (e: ResponderEvent) => void;
        onTouchStartCapture: (e: ResponderEvent) => void;
        onTouchMoveCapture: (e: ResponderEvent) => void;
    } | {
        onMouseDown?: undefined;
        onMouseDownCapture?: undefined;
        onTouchStart: (e: ResponderEvent) => void;
        onTouchEnd: (e: ResponderEvent) => void;
        onTouchMove: (e: ResponderEvent) => void;
        onTouchStartCapture: (e: ResponderEvent) => void;
        onTouchMoveCapture: (e: ResponderEvent) => void;
    };
    terminateCurrentResponder: () => void;
    getCurrentResponder: () => GrantedTouch | null;
};
export {};
