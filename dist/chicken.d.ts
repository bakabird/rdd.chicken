export declare class chicken {
    jobCount: number;
    afterJobs: () => {};
    log: boolean;
    private Emitter;
    constructor(jobCount: number, afterJobs: () => {});
    oneDown(msg: string): void;
}
