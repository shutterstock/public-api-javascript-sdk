"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
class Configuration {
    constructor(param) {
        this.apiKey = param?.apiKey;
        this.username = param?.consumerKey;
        this.password = param?.consumerSecret;
        this.accessToken = param?.accessToken;
        this.sandbox = param?.sandbox || false;
        this.userAgent = "public-api-sdk-generator/1.6.0";
        this.basePath = this.sandbox ? "https://api-sandbox.shutterstock.com" : undefined;
    }
}
exports.Configuration = Configuration;
