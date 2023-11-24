
export type CmsDto = {
    path: string
    contentKey: string
    access: number
    hasLoading: number
    isAccountSetup: number
}

export interface CmsGlobals {
    contentBlocks?: ContentBlocks[] | null | undefined
    appSetup: boolean | undefined
}

export interface ContentBlocks {
    access: number;
    contentKey: string;
    hasLoading: number;
    id: number;
    isAccountSetup: number;
    path: string;
    created_at: Date;
    updated_at: Date;
}

export type PreloadedGlobals = CmsGlobals