﻿export enum FsmParTypeEnum {
    Number = "Number",
    Trigger="Trigger",
}

export enum FsmParamTypeEnum {
    Number = "Number",
    Trigger = "Trigger",
}
export enum ParamsNameEnum {
    Idle = "Idle",
    Run = "Run",
    Attack="Attack",
}

export enum EntityStateEnum {
    Idle = "Idle",
    Run = "Run",
    Attack = "Attack",
}
export enum EventEnum { }

export enum TexturePatEnum {
    Actor1 = "Prefabs/Actor",
    Map = "Prefabs/Map",
}
export enum PrefabPatEnum {
    Actor1 = "Prefabs/Actor",
    Map ="Prefabs/Map",
}

export enum AnimationPathEnum {
    DownRun = "DownRun",
    DownIdle = "DownIdle",
    RightRun = "RightRun",
    RightIdle = "RightIdle",
    UpRun = "UpRun",
    UpIdle = "UpIdle",
}

export enum ImagePatEnum {
    right = "Sprites/Player/right",
    up = "Sprites/Player/up",
    down = "Sprites/Player/down",
}

export enum GameUIPrefabEnum {
    //联机开
    //startView = "Prefabs/UI/startView",
    clock = "Prefabs/UI/clock",
    pauseView = "Prefabs/UI/pauseView",
    overView = "Prefabs/UI/overView",
}

export enum AudioPatEnum {
    beginBg= "Audio/beginBg",
    button ="Audio/button",
    cat ="Audio/cat",
    dyeColor ="Audio/dyeColor",
    gameBg ="Audio/gameBg",
    stamp ="Audio/stamp",
    submit ="Audio/submit.mp3",
    timeOver ="Audio/timeOver",
}