
export const invokeMethod = (object: any): any => {
        const methodReturn = object.default.prototype;
        methodReturn.register.apply(methodReturn);
        return methodReturn;
}
