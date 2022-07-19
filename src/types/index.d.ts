interface TResponse<T>{
    status:number;
    data:?T;
    message:any;
    success:boolean;
    extra?:any;
}
export interface TUserResponse{
    user: {
        secUid: string;
        id: string;
        shortId: string;
        uniqueId: string;
        nickname: string;
        avatarLarger: string;
        avatarMedium: string;
        avatarThumb: string;
        signature: string;
        createTime: number;
        verified: boolean;
        ftc: boolean;
        relation: number;
        openFavorite: boolean;
        bioLink: {
            link: string;
            risk: number;
        };
        commentSetting: number;
        commerceUserInfo: {
            commerceUser: boolean;
            downLoadLink: any;
            category: string;
            categoryButton: boolean;
        };
        duetSetting: number;
        stitchSetting: number;
        privateAccount: boolean;
        secret: boolean;
        isADVirtual: boolean;
        roomId: string;
        isUnderAge18: boolean;
        uniqueIdModifyTime: number;
        ttSeller: boolean;
        extraInfo: {
            statusCode: number;
        };
        followerCount: number;
        followingCount: number;
        heart: number;
        heartCount: number;
        videoCount: number;
        diggCount: number;
        needFix: boolean;
    };
    post: {
        hasMore: boolean;
        nextCursor: string;
        list: VideoItem[];
    };
    scheme:{
        androidAppName: string;
        androidAppPackage: string;
        androidAppUrl: string;
        fbAppId: string;
        iOSAppId: string;
        iOSAppName: string;
        iOSAppUrl: string;
    }
}
interface Challenges {
    id: string;
    title: string;
    desc: string;
    profileLarger: string;
    profileMedium: string;
    profileThumb: string;
    coverLarger: string;
    coverMedium: string;
    coverThumb: string;
    isCommerce: boolean;
    stats: {
        videoCount: number;
        viewCount: number;
    };
}

interface VideoItem {
    id: string;
    desc: string;
    createTime: string;
    scheduleTime: number;
    video: {
        id: string;
        height: number;
        width: number;
        duration: number;
        ratio: string;
        cover: string;
        originCover: string;
        dynamicCover: string;
        playAddr: string;
        downloadAddr: string;
        shareCover: string[];
        reflowCover: string;
        bitrate: number;
        encodedType: string;
        format: string;
        videoQuality: string;
        encodeUserTag: string;
        codecType: string;
        definition: string;
        subtitleInfos: SubtitleInfos[];
    };
    author: string;
    music: {
        id: string;
        title: string;
        playUrl: string;
        coverLarge: string;
        coverMedium: string;
        coverThumb: string;
        authorName: string;
        original: boolean;
        duration: number;
        album: string;
        scheduleSearchTime: number;
    };
    challenges: Challenges[];
    stats: {
        diggCount: number;
        shareCount: number;
        commentCount: number;
        playCount: number;
    };
    duetInfo: {
        duetFromId: string;
    };
    warnInfo: any[];
    originalItem: boolean;
    officalItem: boolean;
    textExtra: TextExtra[];
    secret: boolean;
    forFriend: boolean;
    digged: boolean;
    itemCommentStatus: number;
    showNotPass: boolean;
    vl1: boolean;
    takeDown: number;
    itemMute: boolean;
    effectStickers: any[];
    authorStats: {
        followerCount: number;
        followingCount: number;
        heart: number;
        heartCount: number;
        videoCount: number;
        diggCount: number;
    };
    privateItem: boolean;
    duetEnabled: boolean;
    stitchEnabled: boolean;
    stickersOnItem: any[];
    isAd: boolean;
    shareEnabled: boolean;
    comments: any[];
    duetDisplay: number;
    stitchDisplay: number;
    indexEnabled: boolean;
    adAuthorization: boolean;
    adLabelVersion: number;
    locationCreated: string;
    nickname: string;
    authorId: string;
    authorSecId: string;
    avatarThumb: string;
    diversificationLabels?: string[];
    creatorCaptionsURLs?: string[];
}


interface SubtitleInfos {
    LanguageID: string;
    LanguageCodeName: string;
    Url: string;
    UrlExpire: string;
    Format: string;
    Version: string;
    Source: string;
    VideoSubtitleID: number;
    Size: string;
}

interface TextExtra {
    awemeId: string;
    start: number;
    end: number;
    hashtagId: string;
    hashtagName: string;
    type: number;
    subType: number;
    userId: string;
    isCommerce: boolean;
    userUniqueId: string;
    secUid: string;
}

export type TUserData = TResponse<TUserResponse>
