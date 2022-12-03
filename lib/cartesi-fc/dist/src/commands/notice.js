"use strict";
// Copyright 2022 Cartesi Pte. Ltd.
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
exports.command = "notice <command>";
exports.desc = "Operations with notices";
const builder = (yargs) => yargs.commandDir("notice_commands", { extensions: ["js", "ts"] });
exports.builder = builder;
const handler = () => { };
exports.handler = handler;
