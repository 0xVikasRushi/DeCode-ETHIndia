"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findInputAddedInfo = void 0;
/**
 * Translate a InputAddedEvent into a NoticeKeys
 * @param receipt Blockchain transaction receipt
 * @returns NoticeKeys to find notice in GraphQL server
 */
const findInputAddedInfo = (receipt, inputContract) => {
    if (receipt.events) {
        for (const event of receipt.events) {
            try {
                const parsedLog = inputContract.interface.parseLog(event);
                if (parsedLog.name == "InputAdded") {
                    return {
                        epoch_index: parsedLog.args.epochNumber.toNumber(),
                        input_index: parsedLog.args.inputIndex.toNumber(),
                    };
                }
            }
            catch (e) {
                // do nothing, just skip to try parsing the next event
            }
        }
    }
    throw new Error(`InputAdded event not found in receipt of transaction ${receipt.transactionHash}`);
};
exports.findInputAddedInfo = findInputAddedInfo;
