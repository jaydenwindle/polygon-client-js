"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cross_fetch_1 = require("cross-fetch");
const querystring = require("querystring");
exports.auth = (apiKey, func) => (...args) => func(apiKey, ...args);
exports.get = (path, apiKey = "invalid", query) => __awaiter(void 0, void 0, void 0, function* () {
    if (!apiKey) {
        throw new Error("API KEY not configured...");
    }
    const authenticatedQuery = Object.assign(Object.assign({}, query), { apiKey });
    const url = `https://api.polygon.io${path}?${querystring.encode(authenticatedQuery)}`;
    const response = yield cross_fetch_1.default(url);
    return response.json();
});