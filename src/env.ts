import { record } from 'power-helper'
import { Capacitor } from '@capacitor/core'

const env = record.createStrictObject({
    Stage: [String, true, import.meta.env.VITE_APP_STAGE],
    Layout: [String, true, import.meta.env.VITE_APP_LAYOUT],
    IsApp: [Boolean, true, Capacitor.isNativePlatform()],
    AppId: [String, true, import.meta.env.VITE_APP_ID],
    Service: [String, true, import.meta.env.VITE_APP_SERVICE],
    Platform: [String, true, Capacitor.getPlatform()],
    WebSiteUrl: [String, false, import.meta.env.VITE_APP_WEBSITE_URL],
    ApiSseUrl: [String, true, import.meta.env.VITE_APP_SSE_URI],
    ApiBaseUrl: [String, true, import.meta.env.VITE_APP_API_URI],
    AppUrlScheme: [String, true, import.meta.env.VITE_APP_URL_SCHEME],
    ApiLogTraceUrl: [String, true, import.meta.env.VITE_APP_API_LOG_TRACE_URL],
    // Google
    GoogleAuthClientId: [String, false, import.meta.env.VITE_APP_GOOGLE_AUTH_CLIENT_ID],
    GoogleMapApiKey: [String, false, import.meta.env.VITE_APP_GOOGLE_MAP_API_KEY],
    // Facebook
    FacebookAuthClientId: [String, false, import.meta.env.VITE_APP_FACEBOOK_AUTH_CLIENT_ID],
    // Apple
    AppleAuthClientId: [String, false, import.meta.env.VITE_APP_APPLE_AUTH_CLIENT_ID],
    // Wechat
    WechatAuthAppId: [String, false, import.meta.env.VITE_APP_WECHAT_AUTH_APP_ID],
    WechatAuthWebAppId: [String, false, import.meta.env.VITE_APP_WECHAT_AUTH_WEB_APP_ID],
    WechatAuthMobileAppId: [String, false, import.meta.env.VITE_APP_WECHAT_AUTH_MOBLIE_APP_ID],
    // 高德地圖
    AMapApiKey: [String, false, import.meta.env.VITE_APP_AMAP_API_KEY],
    AMapServiceHost: [String, false, import.meta.env.VITE_APP_AMAP_SERVICE_HOST]
})

export const useEnv = () => env
