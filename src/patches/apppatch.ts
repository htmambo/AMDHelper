import {PatchType} from "@src/types";

export default class AppPatch {
    appName: string;
    appPath: string;
    constructor(appPath: string) {
        this.appPath = appPath;
        this.appName = appPath.split("/").pop()!.replace(/.app/g, '');
    }
    patched(): PatchType {
        throw new Error(`Method "patched" must be implemented on class ${this.constructor.name}`);
    }
    async patch() {
        throw new Error(`Method "patch" must be implemented on class ${this.constructor.name}`);
    }
    supported(): boolean {
        throw new Error(`Method "supported" must be implemented on class ${this.constructor.name}`);
    }
    missingData(){
        console.log(`Found ${this.appName} app but can't find the data! Please open the app first before patching.`);
    }
}