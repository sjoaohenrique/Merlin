import 'reflect-metadata';

export function Controller(): ClassDecorator;
export function Controller(path: string): ClassDecorator;
export function Controller(path?: string): ClassDecorator {
    return (target: object) => {
        Reflect.defineMetadata('path', path ? path : '/', target)
    };
}
