export function defineCancelApiObject(apiObject: Record<string, Function>) {
    
    const cancelApiObject: Record<string, { handleRequestCancellation: () => AbortController }> = {};

    Object.getOwnPropertyNames(apiObject).forEach((apiPropertyName) => {
        const cancellationControllerObject = {
            controller: undefined as AbortController | undefined,
        };

        cancelApiObject[apiPropertyName] = {
            handleRequestCancellation: () => {

                if (cancellationControllerObject.controller) {
                    cancellationControllerObject.controller.abort();
                }

                cancellationControllerObject.controller = new AbortController();

                return cancellationControllerObject.controller;
            },
        };
    });

    return cancelApiObject;
}
