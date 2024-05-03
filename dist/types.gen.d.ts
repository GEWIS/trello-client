export type posStringOrNumber = 'top' | 'bottom' | number;
export type APIKey = string;
export type APIToken = string;
export type ActionFields = 'id' | 'idMemberCreator' | 'data' | 'type' | 'date' | 'limits' | 'display' | 'memberCreator';
export type Action = {
    id?: TrelloID;
    idMemberCreator?: TrelloID;
    data?: {
        text?: string;
        card?: {
            id?: TrelloID;
            name?: string;
            idShort?: number;
            shortLink?: string;
        };
        board?: {
            id?: TrelloID;
            name?: string;
            shortLink?: string;
        };
        list?: {
            id?: TrelloID;
            name?: string;
        };
    };
    type?: string;
    date?: string;
    limits?: {
        reactions?: {
            perAction?: {
                status?: string;
                disableAt?: number;
                warnAt?: number;
            };
            uniquePerAction?: {
                status?: string;
                disableAt?: number;
                warnAt?: number;
            };
        };
    };
    display?: {
        translationKey?: string;
        entities?: {
            contextOn?: {
                type?: string;
                translationKey?: string;
                hideIfContext?: boolean;
                idContext?: TrelloID;
            };
            card?: {
                type?: string;
                hideIfContext?: boolean;
                id?: TrelloID;
                shortLink?: string;
                text?: string;
            };
            comment?: {
                type?: string;
                text?: string;
            };
            memberCreator?: {
                type?: string;
                id?: TrelloID;
                username?: string;
                text?: string;
            };
        };
    };
    memberCreator?: {
        id?: TrelloID;
        activityBlocked?: boolean;
        avatarHash?: string;
        avatarUrl?: string;
        fullName?: string;
        idMemberReferrer?: TrelloID | null;
        initials?: string;
        username?: string;
    };
};
export type AttachmentFields = 'id' | 'bytes' | 'date' | 'edgeColor' | 'idMember' | 'isUpload' | 'mimeType' | 'name' | 'previews' | 'url' | 'pos';
export type Attachment = {
    id?: TrelloID;
    bytes?: string | null;
    date?: string;
    edgeColor?: Color | null;
    idMember?: TrelloID;
    isUpload?: boolean;
    mimeType?: string;
    name?: string;
    previews?: Array<(string)>;
    url?: string;
    pos?: number;
};
export type BlockedKey = 'notification_comment_card' | 'notification_added_a_due_date' | 'notification_changed_due_date' | 'notification_card_due_soon' | 'notification_removed_from_card' | 'notification_added_attachment_to_card' | 'notification_created_card' | 'notification_moved_card' | 'notification_archived_card' | 'notification_unarchived_card';
export type BoardFields = 'id' | 'name' | 'desc' | 'descData' | 'closed' | 'idMemberCreator' | 'idOrganization' | 'pinned' | 'url' | 'shortUrl' | 'prefs' | 'labelNames' | 'starred' | 'limits' | 'memberships' | 'enterpriseOwned';
export type Board = {
    id: TrelloID;
    /**
     * The name of the board.
     */
    name?: string;
    desc?: string;
    descData?: string;
    closed?: boolean;
    idMemberCreator?: TrelloID;
    idOrganization?: TrelloID;
    pinned?: boolean;
    url?: string;
    shortUrl?: string;
    prefs?: Prefs;
    labelNames?: {
        green?: string;
        yellow?: string;
        orange?: string;
        red?: string;
        purple?: string;
        blue?: string;
        sky?: string;
        lime?: string;
        pink?: string;
        black?: string;
    };
    limits?: Limits;
    starred?: boolean;
    memberships?: string;
    shortLink?: string;
    subscribed?: boolean;
    powerUps?: string;
    dateLastActivity?: string;
    dateLastView?: string;
    idTags?: string;
    datePluginDisable?: string | null;
    creationMethod?: string | null;
    ixUpdate?: number;
    templateGallery?: string | null;
    enterpriseOwned?: boolean;
};
export type BoardBackground = {
    id?: TrelloID;
};
export type BoardStars = {
    id?: TrelloID;
    idBoard?: TrelloID;
    pos?: number;
};
export type Channel = 'email';
export type CheckItem = {
    idChecklist?: TrelloID;
    state?: 'complete' | 'incomplete';
    id?: TrelloID;
    name?: string;
    nameData?: string | null;
    pos?: string;
};
export type Checklist = {
    id?: TrelloID;
};
export type Card = {
    id?: TrelloID;
    address?: string | null;
    badges?: {
        attachmentsByType?: {
            trello?: {
                board?: number;
                card?: number;
            };
        };
        location?: boolean;
        votes?: number;
        viewingMemberVoted?: boolean;
        subscribed?: boolean;
        fogbugz?: string;
        checkItems?: number;
        checkItemsChecked?: number;
        comments?: number;
        attachments?: number;
        description?: boolean;
        due?: string | null;
        start?: string | null;
        dueComplete?: boolean;
    };
    checkItemStates?: Array<(string)>;
    closed?: boolean;
    coordinates?: string | null;
    creationMethod?: string | null;
    dateLastActivity?: string;
    desc?: string;
    descData?: {
        emoji?: {
            [key: string]: unknown;
        };
    };
    due?: string | null;
    dueReminder?: string | null;
    idBoard?: TrelloID;
    idChecklists?: Array<(Checklist | TrelloID)>;
    idLabels?: Array<(Label | TrelloID)>;
    idList?: TrelloID;
    idMembers?: Array<(TrelloID)>;
    idMembersVoted?: Array<(TrelloID)>;
    idShort?: number;
    idAttachmentCover?: TrelloID | null;
    labels?: Array<(TrelloID)>;
    limits?: Limits;
    locationName?: string | null;
    manualCoverAttachment?: boolean;
    name?: string;
    pos?: number;
    shortLink?: string;
    shortUrl?: string;
    subscribed?: boolean;
    url?: string;
    cover?: {
        idAttachment?: TrelloID | null;
        color?: Color | null;
        idUploadedBackground?: boolean | null;
        size?: 'normal';
        brightness?: 'light' | 'dark';
        isTemplate?: boolean;
    };
};
/**
 * The fields on a Card.
 */
export type CardFields = 'id' | 'address' | 'badges' | 'checkItemStates' | 'closed' | 'coordinates' | 'creationMethod' | 'dueComplete' | 'dateLastActivity' | 'desc' | 'descData' | 'due' | 'dueReminder' | 'idBoard' | 'idChecklists' | 'idLabels' | 'idList' | 'idMembers' | 'idMembersVoted' | 'idShort' | 'idAttachmentCover' | 'labels' | 'limits' | 'locationName' | 'manualCoverAttachment' | 'name' | 'pos' | 'shortLink' | 'shortUrl' | 'subscribed' | 'url' | 'cover' | 'isTemplate';
export type ClaimableOrganizations = {
    organizations?: Array<{
        name?: string;
        displayName?: string;
        activeMembershipCount?: number;
        idActiveAdmins?: Array<TrelloID>;
        products?: Array<(number)>;
        id?: TrelloID;
        logoUrl?: string | null;
        /**
         * The date of the most recent activity on any of the boards in the workspace. If the workspace has no boards, or the boards have no activity, this value will be null.
         */
        dateLastActive?: string | null;
    }>;
    claimableCount?: number;
};
export type CustomEmoji = {
    id?: TrelloID;
    url?: string;
    name?: string;
};
export type CustomField = {
    id?: TrelloID;
    idModel?: string;
    modelType?: 'card' | 'board' | 'member';
    fieldGroup?: string;
    display?: {
        cardFront?: boolean;
        name?: string;
        pos?: string;
        options?: Array<{
            id?: TrelloID;
            idCustomField?: TrelloID;
            value?: {
                text?: string;
            };
            color?: string;
            pos?: number;
        }>;
    };
    type?: string;
};
export type CustomFieldItems = {
    id?: TrelloID;
    value?: {
        checked?: string;
    };
    idCustomField?: TrelloID;
    idModel?: TrelloID;
    modelType?: 'card' | 'board' | 'member';
};
export type CustomSticker = {
    id?: TrelloID;
    url?: string;
    scaled?: Array<{
        id?: TrelloID;
    }>;
};
export type Emoji = {
    trello?: Array<{
        unified?: string;
        name?: string;
        native?: string;
        shortName?: string;
        shortNames?: Array<(string)>;
        text?: string;
        texts?: string | null;
        category?: string;
        sheetX?: number;
        sheetY?: number;
        tts?: string;
        keywords?: Array<(string)>;
    }>;
};
export type Enterprise = {
    id?: TrelloID;
    name?: string;
    displayName?: string;
    logoHash?: string | null;
    logoUrl?: string | null;
    prefs?: {
        ssoOnly?: boolean;
        signup?: {
            banner?: string;
            bannerHtml?: string;
        };
        mandatoryTransferDate?: string | null;
        brandingColor?: string;
        autoJoinOrganizations?: boolean;
        notifications?: {
            [key: string]: unknown;
        };
        maxMembers?: number | null;
    };
    organizationPrefs?: {
        boardVisibilityRestrict?: {
            [key: string]: unknown;
        };
        boardDeleteRestrict?: {
            [key: string]: unknown;
        };
        attachmentRestrictions?: Array<('computer' | 'trello' | 'google-drive' | 'box' | 'onedrive' | 'link')>;
    };
    ssoActivationFailed?: boolean;
    idAdmins?: Array<TrelloID>;
    enterpriseDomains?: Array<(string)>;
    isRealEnterprise?: boolean;
    pluginWhitelistingEnabled?: Array<TrelloID>;
    idOrganizations?: Array<TrelloID>;
    products?: Array<(number)>;
    licenses?: {
        maxMembers?: number | null;
        totalMembers?: number;
        relatedEnterprises?: Array<{
            name?: string;
            displayName?: string;
            count?: number;
        }>;
    };
    domains?: Array<(string)>;
    dateOrganizationPrefsLastUpdated?: string;
    idp?: {
        requestSigned?: boolean;
        certificate?: string | null;
        loginUrl?: string | null;
    };
};
export type EnterpriseAdmin = {
    id?: TrelloID;
    fullName?: string;
    username?: string;
};
export type EnterpriseAuditLog = {
    idAction?: TrelloID;
    type?: string;
    date?: string;
    memberCreator?: {
        id?: TrelloID;
        username?: string;
        fullName?: string;
    };
    organization?: {
        enterpriseJoinRequest?: {
            idEnterprise?: TrelloID;
            idMember?: TrelloID;
            date?: string;
        } | null;
        id?: TrelloID;
        name?: string;
    };
    member?: {
        id?: TrelloID;
        username?: string;
        fullName?: string;
    };
};
export type Export = {
    id?: TrelloID;
    status?: {
        attempts?: number;
        finished?: boolean;
        stage?: string;
    };
    startedAt?: string;
    size?: string | null;
    exportUrl?: string | null;
};
export type TrelloID = string;
export type ViewFilter = 'all' | 'closed' | 'none' | 'open';
export type Color = 'yellow' | 'purple' | 'blue' | 'red' | 'green' | 'orange' | 'black' | 'sky' | 'pink' | 'lime';
export type CardAging = 'pirate' | 'regular';
export type ImageDescriptor = {
    /**
     * The width of the image.
     */
    width?: number;
    /**
     * The height of the image.
     */
    height?: number;
    /**
     * The URL of the image.
     */
    url?: string;
};
export type Label = {
    /**
     * The ID of the label.
     */
    id?: TrelloID;
    /**
     * The ID of the board the label is on.
     */
    idBoard?: TrelloID;
    /**
     * The name displayed for the label.
     */
    name?: string | null;
    /**
     * The color of the label. Null means no color and the label will not be shown on the front of Cards.
     */
    color?: Color;
};
export type ListFields = 'id';
export type TrelloList = {
    id?: TrelloID;
    /**
     * The name of the list
     */
    name?: string;
    closed?: boolean;
    pos?: number;
    softLimit?: string;
    idBoard?: string;
    subscribed?: boolean;
    limits?: Limits;
};
export type LimitsObject = {
    status?: 'ok' | 'warning';
    disableAt?: number;
    warnAt?: number;
};
export type Limits = {
    attachments?: {
        perBoard?: LimitsObject;
    };
};
export type MemberFields = 'id';
export type Membership = {
    managed?: boolean;
    licensed?: boolean;
    admin?: boolean;
    deactivated?: boolean;
    collaborator?: boolean;
    member?: {
        id?: string;
        fullname?: string;
        username?: string;
        dateLastImpression?: string;
        email?: string;
        initials?: string;
        avatarURL?: string;
        memberType?: string;
        confirmed?: boolean;
    };
};
export type Member = {
    id?: TrelloID;
    activityBlocked?: boolean;
    avatarHash?: string;
    avatarUrl?: string;
    bio?: string;
    bioData?: {
        emoji?: {
            [key: string]: unknown;
        };
    };
    confirmed?: boolean;
    fullName?: string;
    idEnterprise?: TrelloID;
    idEnterprisesDeactivated?: Array<(string)>;
    idMemberReferrer?: TrelloID | null;
    idPremOrgsAdmin?: Array<TrelloID>;
    initials?: string;
    memberType?: 'normal' | 'ghost';
    /**
     * Profile data with restricted visibility. These fields are visible only to members of the
     * same organization. The values here (full name, for example) may differ from the values
     * at the top level of the response.
     *
     */
    nonPublic?: {
        fullName?: string;
        initials?: string;
        /**
         * A URL that references the non-public avatar for the member
         */
        avatarUrl?: string;
        avatarHash?: string;
    };
    /**
     * Whether the response contains non-public profile data for the member
     */
    nonPublicAvailable?: boolean;
    products?: Array<(number)>;
    url?: string;
    username?: string;
    status?: 'disconnected';
    aaEmail?: string | null;
    aaEnrolledDate?: string | null;
    aaId?: string | null;
    avatarSource?: 'gravatar' | 'upload';
    email?: string;
    gravatarHash?: string;
    idBoards?: Array<TrelloID>;
    idOrganizations?: Array<TrelloID>;
    idEnterprisesAdmin?: Array<TrelloID>;
    limits?: LimitsObject;
    loginTypes?: Array<('password' | 'saml')>;
    marketingOptIn?: {
        optedIn?: boolean;
        date?: string;
    };
    messagesDismissed?: {
        name?: string;
        count?: string;
        lastDismissed?: string;
        _id?: TrelloID;
    };
    oneTimeMessagesDismissed?: Array<(string)>;
    prefs?: MemberPrefs;
    trophies?: Array<(string)>;
    uploadedAvatarHash?: string;
    uploadedAvatarUrl?: string;
    premiumFeatures?: Array<(string)>;
    isAaMastered?: boolean;
    ixUpdate?: number;
    idBoardsPinned?: Array<TrelloID> | null;
};
export type MemberPrefs = {
    timezoneInfo?: {
        offsetCurrent?: number;
        timezoneCurrent?: string;
        offsetNext?: number;
        dateNext?: string;
        timezoneNext?: string;
    };
    privacy?: {
        fullName?: 'public' | 'private' | 'collaborator';
        avatar?: 'public' | 'private' | 'collaborator';
    };
    sendSummaries?: boolean;
    minutesBetweenSummaries?: number;
    minutesBeforeDeadlineToNotify?: number;
    colorBlind?: boolean;
    locale?: string;
    timezone?: string;
    twoFactor?: {
        enabled?: boolean;
        needsNewBackups?: boolean;
    };
};
export type Memberships = {
    id?: TrelloID;
};
export type NotificationFields = 'id' | 'unread' | 'type' | 'date' | 'dateRead' | 'data' | 'card' | 'board' | 'idMemberCreator' | 'idAction' | 'reactions';
export type Notification = {
    id?: string;
    unread?: boolean;
    type?: 'cardDueSoon';
    date?: string;
    dateRead?: string;
    data?: string;
    card?: Card;
    board?: Board;
    idMemberCreator?: TrelloID | null;
    idAction?: TrelloID | null;
    reactions?: unknown[];
};
export type NotificationChannelSettings = {
    id?: string;
    idMember?: TrelloID;
    blockedKeys?: Array<BlockedKey>;
    channel?: Channel;
};
export type OrganizationFields = 'id' | 'name';
export type Organization = {
    id?: TrelloID;
};
export type PendingOrganizations = {
    id?: TrelloID;
    idMember?: TrelloID;
    memberRequestor?: {
        id?: TrelloID;
        fullName?: string;
    };
    date?: string;
    displayName?: string;
    membershipCount?: number;
    logoUrl?: string | null;
    transferability?: {
        transferrable?: boolean;
        newBillableMembers?: Array<{
            id?: TrelloID;
            fullName?: string;
            username?: string;
            initials?: string;
            avatarHash?: string;
        }>;
        restrictedMembers?: Array<{
            id?: TrelloID;
            fullName?: string;
            username?: string;
            initials?: string;
            avatarHash?: string;
        }>;
    };
};
export type Plugin = {
    id?: TrelloID;
};
export type PluginData = {
    id?: TrelloID;
    idPlugin?: TrelloID;
    scope?: 'member' | 'board' | 'organization' | 'card';
    idModel?: TrelloID;
    value?: string;
    access?: 'private' | 'shared';
};
export type PluginListing = {
    id?: TrelloID;
    name?: string;
    locale?: string;
    description?: string;
    overview?: string;
};
export type Prefs = {
    permissionLevel?: 'org' | 'board';
    hideVotes?: boolean;
    voting?: 'disabled' | 'enabled';
    comments?: string;
    invitations?: 'admins' | 'members';
    selfJoin?: boolean;
    cardCovers?: boolean;
    isTemplate?: boolean;
    cardAging?: CardAging;
    calendarFeedEnabled?: boolean;
    background?: TrelloID;
    backgroundImage?: string;
    backgroundImageScaled?: Array<ImageDescriptor>;
    backgroundTile?: boolean;
    backgroundBrightness?: string;
    backgroundBottomColor?: string;
    backgroundTopColor?: string;
    canBePublic?: boolean;
    canBeEnterprise?: boolean;
    canBeOrg?: boolean;
    canBePrivate?: boolean;
    canInvite?: boolean;
};
export type SavedSearch = {
    id?: TrelloID;
    name?: string;
    query?: string;
    pos?: posStringOrNumber;
};
export type Tag = {
    id?: TrelloID;
    name?: string;
};
export type TokenPermission = {
    idModel?: TrelloID | '*';
    modelType?: 'board' | 'member' | 'organization' | 'enterprise';
    read?: boolean;
    write?: boolean;
};
export type TokenFields = 'identifier' | 'idMember' | 'dateCreated' | 'dateExpires' | 'permissions';
export type Token = {
    id?: TrelloID;
    identifier?: string;
    idMember?: TrelloID;
    dateCreated?: string;
    dateExpires?: string | null;
    permissions?: Array<TokenPermission>;
};
export type TransferrableOrganization = {
    transferrable?: boolean;
    newBillableMembers?: Array<{
        id?: TrelloID;
        fullName?: string;
        username?: string;
        initials?: string;
        avatarHash?: string;
    }>;
    restrictedMembers?: Array<{
        id?: TrelloID;
        fullName?: string;
        username?: string;
        initials?: string;
        avatarHash?: string;
    }>;
};
export type Webhook = {
    id?: TrelloID;
    description?: string;
    idModel?: TrelloID;
    callbackURL?: string;
    active?: boolean;
    consecutiveFailures?: number;
    firstConsecutiveFailDate?: string | null;
};
export type Error = {
    code: string;
    message: string;
};
export type CFValue = {
    number?: string;
};
export type customFieldItemValue = {
    value?: {
        [key: string]: unknown;
    };
};
export type $OpenApiTs = {
    '/actions/{id}': {
        get: {
            req: {
                display?: boolean;
                entities?: boolean;
                /**
                 * `all` or a comma-separated list of action [fields](/cloud/trello/guides/rest-api/object-definitions/#action-object)
                 */
                fields?: string;
                /**
                 * The ID of the Action
                 */
                id: TrelloID;
                member?: boolean;
                /**
                 * Whether to include the member object for the creator of the action
                 */
                memberCreator?: boolean;
                /**
                 * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                memberCreatorFields?: string;
                /**
                 * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                memberFields?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        put: {
            req: {
                /**
                 * The ID of the Action
                 */
                id: TrelloID;
                /**
                 * The new text for the comment
                 */
                text: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        delete: {
            req: {
                /**
                 * The ID of the Action
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/actions/{id}/{field}': {
        get: {
            req: {
                /**
                 * An action field
                 */
                field: ActionFields;
                /**
                 * The ID of the Action
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Action;
            };
        };
    };
    '/actions/{id}/board': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of board fields
                 */
                fields?: BoardFields;
                /**
                 * The ID of the action
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Board;
            };
        };
    };
    '/actions/{id}/card': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of card fields
                 */
                fields?: CardFields;
                /**
                 * The ID of the action
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Card;
            };
        };
    };
    '/actions/{id}/list': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of list fields
                 */
                fields?: ListFields;
                /**
                 * The ID of the action
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: TrelloList;
            };
        };
    };
    '/actions/{id}/member': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of member fields
                 */
                fields?: MemberFields;
                /**
                 * The ID of the Action
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Member;
            };
        };
    };
    '/actions/{id}/memberCreator': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of member fields
                 */
                fields?: MemberFields;
                /**
                 * The ID of the Action
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Member;
            };
        };
    };
    '/actions/{id}/organization': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of organization fields
                 */
                fields?: OrganizationFields;
                /**
                 * The ID of the action
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Organization;
            };
        };
    };
    '/actions/{id}/text': {
        put: {
            req: {
                /**
                 * The ID of the action to update
                 */
                id: TrelloID;
                /**
                 * The new text for the comment
                 */
                value: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/actions/{idAction}/reactions': {
        get: {
            req: {
                /**
                 * Whether to load the emoji as a nested resource.
                 */
                emoji?: boolean;
                /**
                 * The ID of the action
                 */
                idAction: TrelloID;
                /**
                 * Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)
                 */
                member?: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        post: {
            req: {
                /**
                 * The ID of the action
                 */
                idAction: TrelloID;
                requestBody?: {
                    /**
                     * The primary `shortName` of the emoji to add. See [/emoji](#emoji)
                     */
                    shortName?: string;
                    /**
                     * The `skinVariation` of the emoji to add. See [/emoji](#emoji)
                     */
                    skinVariation?: string;
                    /**
                     * The emoji to add as a native unicode emoji. See [/emoji](#emoji)
                     */
                    native?: string;
                    /**
                     * The `unified` value of the emoji to add. See [/emoji](#emoji)
                     */
                    unified?: string;
                };
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/actions/{idAction}/reactions/{id}': {
        get: {
            req: {
                /**
                 * Whether to load the emoji as a nested resource.
                 */
                emoji?: boolean;
                /**
                 * The ID of the reaction
                 */
                id: TrelloID;
                /**
                 * The ID of the Action
                 */
                idAction: TrelloID;
                /**
                 * Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)
                 */
                member?: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        delete: {
            req: {
                /**
                 * The ID of the reaction
                 */
                id: TrelloID;
                /**
                 * The ID of the Action
                 */
                idAction: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/actions/{idAction}/reactionsSummary': {
        get: {
            req: {
                /**
                 * The ID of the action
                 */
                idAction: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/applications/{key}/compliance': {
        get: {
            req: {
                key: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/batch': {
        get: {
            req: {
                /**
                 * A list of API routes. Maximum of 10 routes allowed. The routes should begin with a forward slash and should not include the API version number - e.g. "urls=/members/trello,/cards/[cardId]"
                 */
                urls: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/memberships': {
        get: {
            req: {
                /**
                 * Works for premium organizations only.
                 */
                activity?: boolean;
                /**
                 * One of `admins`, `all`, `none`, `normal`
                 */
                filter?: 'admins' | 'all' | 'none' | 'normal';
                /**
                 * The ID of the board
                 */
                id: TrelloID;
                /**
                 * Determines whether to include a [nested member object](/cloud/trello/guides/rest-api/nested-resources/).
                 */
                member?: boolean;
                /**
                 * Fields to show if `member=true`. Valid values: [nested member resource fields](/cloud/trello/guides/rest-api/nested-resources/).
                 */
                memberFields?: MemberFields;
                /**
                 * Shows the type of member to the org the user is. For instance, an org admin will have a `orgMemberType` of `admin`.
                 */
                orgMemberType?: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: Memberships;
            };
        };
    };
    '/boards/{id}': {
        get: {
            req: {
                /**
                 * This is a nested resource. Read more about actions as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
                 */
                actions?: string;
                /**
                 * Valid values are one of: `mine` or `none`.
                 */
                boardStars?: string;
                /**
                 * Use with the `cards` param to include card pluginData with the response
                 */
                cardPluginData?: boolean;
                /**
                 * This is a nested resource. Read more about cards as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
                 */
                cards?: string;
                /**
                 * This is a nested resource. Read more about checklists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
                 */
                checklists?: string;
                /**
                 * This is a nested resource. Read more about custom fields as nested resources [here](#custom-fields-nested-resource).
                 */
                customFields?: boolean;
                /**
                 * The fields of the board to be included in the response. Valid values: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url
                 */
                fields?: string;
                id: TrelloID;
                /**
                 * This is a nested resource. Read more about labels as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
                 */
                labels?: string;
                /**
                 * This is a nested resource. Read more about lists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
                 */
                lists?: string;
                /**
                 * This is a nested resource. Read more about members as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
                 */
                members?: string;
                /**
                 * This is a nested resource. Read more about memberships as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
                 */
                memberships?: string;
                myPrefs?: boolean;
                /**
                 * This is a nested resource. Read more about organizations as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
                 */
                organization?: boolean;
                /**
                 * Use with the `organization` param to include organization pluginData with the response
                 */
                organizationPluginData?: boolean;
                /**
                 * Determines whether the pluginData for this board should be returned. Valid values: true or false.
                 */
                pluginData?: boolean;
                /**
                 * Also known as collections, tags, refer to the collection(s) that a Board belongs to.
                 */
                tags?: boolean;
            };
            res: {
                /**
                 * Unexpected error
                 */
                200: Error;
                /**
                 * Unauthorized
                 */
                401: Error;
                /**
                 * The specified resource was not found
                 */
                404: Error;
            };
        };
        put: {
            req: {
                /**
                 * Whether the board is closed
                 */
                closed?: boolean;
                /**
                 * A new description for the board, 0 to 16384 characters long
                 */
                desc?: string;
                id: TrelloID;
                /**
                 * The id of the Workspace the board should be moved to
                 */
                idOrganization?: string;
                /**
                 * Name for the blue label. 1 to 16384 characters long
                 */
                labelNamesBlue?: string;
                /**
                 * Name for the green label. 1 to 16384 characters long
                 */
                labelNamesGreen?: string;
                /**
                 * Name for the orange label. 1 to 16384 characters long
                 */
                labelNamesOrange?: string;
                /**
                 * Name for the purple label. 1 to 16384 characters long
                 */
                labelNamesPurple?: string;
                /**
                 * Name for the red label. 1 to 16384 characters long
                 */
                labelNamesRed?: string;
                /**
                 * Name for the yellow label. 1 to 16384 characters long
                 */
                labelNamesYellow?: string;
                /**
                 * The new name for the board. 1 to 16384 characters long.
                 */
                name?: string;
                /**
                 * The id of a custom background or one of: blue, orange, green, red, purple, pink, lime, sky, grey
                 */
                prefsBackground?: string;
                /**
                 * Determines whether the calendar feed is enabled or not.
                 */
                prefsCalendarFeedEnabled?: boolean;
                /**
                 * One of: pirate, regular
                 */
                prefsCardAging?: string;
                /**
                 * Whether card covers should be displayed on this board
                 */
                prefsCardCovers?: boolean;
                /**
                 * Who can comment on cards on this board. One of: disabled, members, observers, org, public
                 */
                prefsComments?: string;
                /**
                 * Determines whether the Voting Power-Up should hide who voted on cards or not.
                 */
                prefsHideVotes?: boolean;
                /**
                 * Who can invite people to this board. One of: admins, members
                 */
                prefsInvitations?: string;
                /**
                 * One of: org, private, public
                 */
                prefsPermissionLevel?: string;
                /**
                 * Whether Workspace members can join the board themselves
                 */
                prefsSelfJoin?: boolean;
                /**
                 * Who can vote on this board. One of disabled, members, observers, org, public
                 */
                prefsVoting?: string;
                /**
                 * Whether the acting user is subscribed to the board
                 */
                subscribed?: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        delete: {
            req: {
                /**
                 * The id of the board to delete
                 */
                id: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/{field}': {
        get: {
            req: {
                /**
                 * The field you'd like to receive. Valid values: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
                 */
                field: string;
                /**
                 * The ID of the board.
                 */
                id: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{boardId}/actions': {
        get: {
            req: {
                /**
                 * An Action ID
                 */
                before?: string;
                boardId: string;
                /**
                 * The fields to be returned for the Actions. [See Action fields here](/cloud/trello/guides/rest-api/object-definitions/#action-object).
                 */
                fields?: Action;
                /**
                 * A comma-separated list of [action types](/cloud/trello/guides/rest-api/action-types/).
                 */
                filter?: string;
                /**
                 * The format of the returned Actions. Either list or count.
                 */
                format?: string;
                /**
                 * A comma-separated list of idModels. Only actions related to these models will be returned.
                 */
                idModels?: string;
                /**
                 * The limit of the number of responses, between 0 and 1000.
                 */
                limit?: number;
                /**
                 * Whether to return the member object for each action.
                 */
                member?: boolean;
                /**
                 * Whether to return the memberCreator object for each action.
                 */
                memberCreator?: boolean;
                /**
                 * The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) creator to return
                 */
                memberCreatorFields?: string;
                /**
                 * The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) to return.
                 */
                memberFields?: string;
                /**
                 * The page of results for actions.
                 */
                page?: number;
                /**
                 * Whether to show reactions on comments or not.
                 */
                reactions?: boolean;
                /**
                 * An Action ID
                 */
                since?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/cards/{idCard}': {
        get: {
            req: {
                /**
                 * An Action ID
                 */
                before?: string;
                /**
                 * The fields to be returned for the Actions. [See Action fields here](/cloud/trello/guides/rest-api/object-definitions/#action-object).
                 */
                fields?: Action;
                /**
                 * A comma-separated list of [action types](/cloud/trello/guides/rest-api/action-types/).
                 */
                filter?: string;
                /**
                 * The format of the returned Actions. Either list or count.
                 */
                format?: string;
                /**
                 * The ID of the board
                 */
                id: string;
                /**
                 * The id the card to retrieve.
                 */
                idCard: string;
                /**
                 * A comma-separated list of idModels. Only actions related to these models will be returned.
                 */
                idModels?: string;
                /**
                 * The limit of the number of responses, between 0 and 1000.
                 */
                limit?: number;
                /**
                 * Whether to return the member object for each action.
                 */
                member?: boolean;
                /**
                 * Whether to return the memberCreator object for each action.
                 */
                memberCreator?: boolean;
                /**
                 * The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) creator to return
                 */
                memberCreatorFields?: string;
                /**
                 * The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) to return.
                 */
                memberFields?: string;
                /**
                 * The page of results for actions.
                 */
                page?: number;
                /**
                 * Whether to show reactions on comments or not.
                 */
                reactions?: boolean;
                /**
                 * An Action ID
                 */
                since?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{boardId}/boardStars': {
        get: {
            req: {
                boardId: string;
                /**
                 * Valid values: mine, none
                 */
                filter?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<(BoardStars)>;
            };
        };
    };
    '/boards/{id}/checklists': {
        get: {
            req: {
                /**
                 * The ID of the board
                 */
                id: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/cards': {
        get: {
            req: {
                id: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/cards/{filter}': {
        get: {
            req: {
                /**
                 * Valid Values: all, closed, none, open, visible.
                 */
                filter: 'all' | 'closed' | 'none' | 'open' | 'visible';
                /**
                 * ID of the Board
                 */
                id: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/customFields': {
        get: {
            req: {
                /**
                 * The ID of the board
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<CustomField>;
            };
        };
    };
    '/boards/{id}/labels': {
        get: {
            req: {
                /**
                 * The fields to be returned for the Labels.
                 */
                fields?: Label;
                /**
                 * The ID of the Board.
                 */
                id: TrelloID;
                /**
                 * The number of Labels to be returned.
                 */
                limit?: number;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        post: {
            req: {
                /**
                 * Sets the color of the new label. Valid values are a label color or `null`.
                 */
                color: string;
                /**
                 * The id of the board to update
                 */
                id: string;
                /**
                 * The name of the label to be created. 1 to 16384 characters long.
                 */
                name: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/lists': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/#card-object)
                 */
                cardFields?: string;
                /**
                 * Filter to apply to Cards.
                 */
                cards?: ViewFilter;
                /**
                 * `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: string;
                /**
                 * Filter to apply to Lists
                 */
                filter?: ViewFilter;
                /**
                 * The ID of the board
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<TrelloList>;
            };
        };
        post: {
            req: {
                /**
                 * The ID of the board
                 */
                id: TrelloID;
                /**
                 * The name of the list to be created. 1 to 16384 characters long.
                 */
                name: string;
                /**
                 * Determines the position of the list. Valid values: `top`, `bottom`, or a positive number.
                 */
                pos?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: TrelloList;
            };
        };
    };
    '/boards/{id}/lists/{filter}': {
        get: {
            req: {
                /**
                 * One of `all`, `closed`, `none`, `open`
                 */
                filter: ViewFilter;
                /**
                 * The ID of the board
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/members': {
        get: {
            req: {
                /**
                 * The ID of the board
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        put: {
            req: {
                /**
                 * The email address of a user to add as a member of the board.
                 */
                email: string;
                /**
                 * The ID of the board
                 */
                id: TrelloID;
                requestBody?: {
                    /**
                     * The full name of the user to as a member of the board. Must have a length of at least 1 and cannot begin nor end with a space.
                     */
                    fullName?: string;
                };
                /**
                 * Valid values: admin, normal, observer. Determines what type of member the user being added should be of the board.
                 */
                type?: 'admin' | 'normal' | 'observer';
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/members/{idMember}': {
        put: {
            req: {
                /**
                 * Optional param that allows organization admins to add multi-board guests onto a board.
                 */
                allowBillableGuest?: boolean;
                /**
                 * The id of the board to update
                 */
                id: TrelloID;
                /**
                 * The id of the member to add to the board.
                 */
                idMember: TrelloID;
                /**
                 * One of: admin, normal, observer. Determines the type of member this user will be on the board.
                 */
                type: 'admin' | 'normal' | 'observer';
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        delete: {
            req: {
                /**
                 * The id of the board to update
                 */
                id: TrelloID;
                /**
                 * The id of the member to add to the board.
                 */
                idMember: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/memberships/{idMembership}': {
        put: {
            req: {
                /**
                 * The id of the board to update
                 */
                id: TrelloID;
                /**
                 * The id of a membership that should be added to this board.
                 */
                idMembership: TrelloID;
                /**
                 * Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username
                 */
                memberFields?: 'all' | 'avatarHash' | 'bio' | 'bioData' | 'confirmed' | 'fullName' | 'idPremOrgsAdmin' | 'initials' | 'memberType' | 'products' | 'status' | 'url' | 'username';
                /**
                 * One of: admin, normal, observer. Determines the type of member that this membership will be to this board.
                 */
                type: 'admin' | 'normal' | 'observer';
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/myPrefs/emailPosition': {
        put: {
            req: {
                /**
                 * The id of the board to update
                 */
                id: TrelloID;
                /**
                 * Valid values: bottom, top. Determines the position of the email address.
                 */
                value: 'bottom' | 'top';
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/myPrefs/idEmailList': {
        put: {
            req: {
                /**
                 * The id of the board to update
                 */
                id: TrelloID;
                /**
                 * The id of an email list.
                 */
                value: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/myPrefs/showListGuide': {
        put: {
            req: {
                /**
                 * The id of the board to update
                 */
                id: TrelloID;
                /**
                 * Determines whether to show the list guide.
                 */
                value: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/myPrefs/showSidebar': {
        put: {
            req: {
                /**
                 * The id of the board to update
                 */
                id: TrelloID;
                /**
                 * Determines whether to show the side bar.
                 */
                value: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/myPrefs/showSidebarActivity': {
        put: {
            req: {
                /**
                 * The id of the board to update
                 */
                id: TrelloID;
                /**
                 * Determines whether to show sidebar activity.
                 */
                value: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/myPrefs/showSidebarBoardActions': {
        put: {
            req: {
                /**
                 * The id of the board to update
                 */
                id: TrelloID;
                /**
                 * Determines whether to show the sidebar board actions.
                 */
                value: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/myPrefs/showSidebarMembers': {
        put: {
            req: {
                /**
                 * The id of the board to update
                 */
                id: TrelloID;
                /**
                 * Determines whether to show members of the board in the sidebar.
                 */
                value: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/': {
        post: {
            req: {
                /**
                 * Determines whether to use the default set of labels.
                 */
                defaultLabels?: boolean;
                /**
                 * Determines whether to add the default set of lists to a board (To Do, Doing, Done). It is ignored if `idBoardSource` is provided.
                 */
                defaultLists?: boolean;
                /**
                 * A new description for the board, 0 to 16384 characters long
                 */
                desc?: string;
                /**
                 * The id of a board to copy into the new board.
                 */
                idBoardSource?: TrelloID;
                /**
                 * The id or name of the Workspace the board should belong to.
                 */
                idOrganization?: TrelloID;
                /**
                 * To keep cards from the original board pass in the value `cards`
                 */
                keepFromSource?: 'cards' | 'none';
                /**
                 * The new name for the board. 1 to 16384 characters long.
                 */
                name: string;
                /**
                 * The Power-Ups that should be enabled on the new board. One of: `all`, `calendar`, `cardAging`, `recap`, `voting`.
                 */
                powerUps?: 'all' | 'calendar' | 'cardAging' | 'recap' | 'voting';
                /**
                 * The id of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`.
                 */
                prefsBackground?: 'blue' | 'orange' | 'green' | 'red' | 'purple' | 'pink' | 'lime' | 'sky' | 'grey';
                /**
                 * Determines the type of card aging that should take place on the board if card aging is enabled. One of: `pirate`, `regular`.
                 */
                prefsCardAging?: 'pirate' | 'regular';
                /**
                 * Determines whether card covers are enabled.
                 */
                prefsCardCovers?: boolean;
                /**
                 * Who can comment on cards on this board. One of: `disabled`, `members`, `observers`, `org`, `public`.
                 */
                prefsComments?: 'disabled' | 'members' | 'observers' | 'org' | 'public';
                /**
                 * Determines what types of members can invite users to join. One of: `admins`, `members`.
                 */
                prefsInvitations?: 'members' | 'admins';
                /**
                 * The permissions level of the board. One of: `org`, `private`, `public`.
                 */
                prefsPermissionLevel?: 'org' | 'private' | 'public';
                /**
                 * Determines whether users can join the boards themselves or whether they have to be invited.
                 */
                prefsSelfJoin?: boolean;
                /**
                 * Who can vote on this board. One of `disabled`, `members`, `observers`, `org`, `public`.
                 */
                prefsVoting?: 'disabled' | 'members' | 'observers' | 'org' | 'public';
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/calendarKey/generate': {
        post: {
            req: {
                /**
                 * The id of the board to update
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/emailKey/generate': {
        post: {
            req: {
                /**
                 * The id of the board to update
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/idTags': {
        post: {
            req: {
                /**
                 * The id of the board to update
                 */
                id: TrelloID;
                /**
                 * The id of a tag from the organization to which this board belongs.
                 */
                value: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/markedAsViewed': {
        post: {
            req: {
                /**
                 * The id of the board to update
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/boardPlugins': {
        get: {
            req: {
                /**
                 * The ID of the Board
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<Plugin>;
            };
        };
        post: {
            req: {
                /**
                 * The ID of the Board
                 */
                id: TrelloID;
                /**
                 * The ID of the Power-Up to enable
                 */
                idPlugin?: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/boardPlugins/{idPlugin}': {
        delete: {
            req: {
                /**
                 * The ID of the board
                 */
                id: TrelloID;
                /**
                 * The ID of the Power-Up to disable
                 */
                idPlugin: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/boards/{id}/plugins': {
        get: {
            req: {
                /**
                 * One of: `enabled` or `available`
                 */
                filter?: 'enabled' | 'available';
                /**
                 * The ID of the board
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Plugin;
            };
        };
    };
    '/cards': {
        post: {
            req: {
                /**
                 * For use with/by the Map View
                 */
                address?: string;
                /**
                 * For use with/by the Map View. Should take the form latitude,longitude
                 */
                coordinates?: string;
                /**
                 * The description for the card
                 */
                desc?: string;
                /**
                 * A due date for the card
                 */
                due?: string;
                dueComplete?: boolean;
                fileSource?: (Blob | File);
                /**
                 * The ID of a card to copy into the new card
                 */
                idCardSource?: TrelloID;
                /**
                 * Comma-separated list of label IDs to add to the card
                 */
                idLabels?: Array<(TrelloID)>;
                /**
                 * The ID of the list the card should be created in
                 */
                idList: TrelloID;
                /**
                 * Comma-separated list of member IDs to add to the card
                 */
                idMembers?: Array<(TrelloID)>;
                /**
                 * If using `idCardSource` you can specify which properties to copy over. `all` or comma-separated list of: `attachments,checklists,customFields,comments,due,start,labels,members,start,stickers`
                 */
                keepFromSource?: 'all' | 'attachments' | 'checklists' | 'comments' | 'customFields' | 'due' | 'start' | 'labels' | 'members' | 'stickers';
                /**
                 * For use with/by the Map View
                 */
                locationName?: string;
                /**
                 * The mimeType of the attachment. Max length 256
                 */
                mimeType?: string;
                /**
                 * The name for the card
                 */
                name?: string;
                /**
                 * The position of the new card. `top`, `bottom`, or a positive float
                 */
                pos?: 'top' | 'bottom' | number;
                /**
                 * The start date of a card, or `null`
                 */
                start?: string | null;
                /**
                 * A URL starting with `http://` or `https://`
                 */
                urlSource?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: Card;
            };
        };
    };
    '/cards/{id}': {
        get: {
            req: {
                /**
                 * See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)
                 */
                actions?: string;
                /**
                 * `all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                attachmentFields?: string;
                /**
                 * `true`, `false`, or `cover`
                 */
                attachments?: 'cover' | boolean;
                /**
                 * Whether to return the board object the card is on
                 */
                board?: boolean;
                /**
                 * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object). **Defaults**: `name, desc, descData, closed, idOrganization, pinned, url, prefs`
                 */
                boardFields?: string;
                checkItemStates?: boolean;
                /**
                 * `all` or a comma-separated list of `idBoard,idCard,name,pos`
                 */
                checklistFields?: string;
                /**
                 * Whether to return the checklists on the card. `all` or `none`
                 */
                checklists?: string;
                /**
                 * Whether to include the customFieldItems
                 */
                customFieldItems?: boolean;
                /**
                 * `all` or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `badges, checkItemStates, closed, dateLastActivity, desc, descData, due, start, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl, url`
                 */
                fields?: string;
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * See the [Lists Nested Resource](/cloud/trello/guides/rest-api/nested-resources/)
                 */
                list?: boolean;
                /**
                 * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`
                 */
                memberFields?: string;
                /**
                 * Whether to return member objects for members on the card
                 */
                members?: boolean;
                /**
                 * Whether to return member objects for members who voted on the card
                 */
                membersVoted?: boolean;
                /**
                 * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`
                 */
                memberVotedFields?: string;
                /**
                 * Whether to include pluginData on the card with the response
                 */
                pluginData?: boolean;
                /**
                 * `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                stickerFields?: string;
                /**
                 * Whether to include sticker models with the response
                 */
                stickers?: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: Card;
            };
        };
        put: {
            req: {
                /**
                 * For use with/by the Map View
                 */
                address?: string;
                /**
                 * Whether the card should be archived (closed: true)
                 */
                closed?: boolean;
                /**
                 * For use with/by the Map View. Should be latitude,longitude
                 */
                coordinates?: string;
                /**
                 * Updates the card's cover
                 * | Option | Values | About |
                 * |--------|--------|-------|
                 * | color | `pink`, `yellow`, `lime`, `blue`, `black`, `orange`, `red`, `purple`, `sky`, `green` | Makes the cover a solid color . |
                 * | brightness | `dark`, `light` | Determines whether the text on the cover should be dark or light.
                 * | url | An unsplash URL: https://images.unsplash.com | Used if making an image the cover. Only Unsplash URLs work.
                 * | idAttachment | ID of an attachment on the card | Used if setting an attached image as the cover. |
                 * | size | `normal`, `full` | Determines whether to show the card name on the cover, or below it. |
                 *
                 * `brightness` can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a `color` and an `idAttachment` at the same time.
                 *
                 * On the brightness options, setting it to light will make the text on the card cover dark:
                 * ![](/cloud/trello/images/rest/cards/cover-brightness-dark.png)
                 *
                 * And vice versa, setting it to dark will make the text on the card cover light:
                 * ![](/cloud/trello/images/rest/cards/cover-brightness-light.png)
                 */
                cover?: {
                    /**
                     * An object containing information regarding the card's cover
                     * `brightness` can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a color and an `idAttachment` at the same time.
                     */
                    value?: {
                        /**
                         * One of: `pink, yellow, lime, blue, black, orange, red, purple, sky, green`
                         */
                        color?: 'pink' | 'yellow' | 'lime' | 'blue' | 'black' | 'orange' | 'red' | 'purple' | 'sky' | 'green';
                        /**
                         * Determines whether the text on the cover should be dark or light. Setting it to `light` will make the text on the card cover dark. And vice versa, setting it to dark will make the text on the card cover light
                         */
                        brightness?: 'dark' | 'light';
                        /**
                         * Used if making an image the cover. Only Unsplash URLs (https://images.unsplash.com/) work.
                         */
                        url?: string;
                    };
                };
                /**
                 * The new description for the card
                 */
                desc?: string;
                /**
                 * When the card is due, or `null`
                 */
                due?: string | null;
                /**
                 * Whether the due date should be marked complete
                 */
                dueComplete?: boolean;
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the image attachment the card should use as its cover, or null for none
                 */
                idAttachmentCover?: TrelloID;
                /**
                 * The ID of the board the card should be on
                 */
                idBoard?: TrelloID;
                /**
                 * Comma-separated list of label IDs
                 */
                idLabels?: TrelloID;
                /**
                 * The ID of the list the card should be in
                 */
                idList?: TrelloID;
                /**
                 * Comma-separated list of member IDs
                 */
                idMembers?: TrelloID;
                /**
                 * For use with/by the Map View
                 */
                locationName?: string;
                /**
                 * The new name for the card
                 */
                name?: string;
                /**
                 * The position of the card in its list. `top`, `bottom`, or a positive float
                 */
                pos?: 'top' | 'bottom' | number;
                /**
                 * The start date of a card, or `null`
                 */
                start?: string | null;
                /**
                 * Whether the member is should be subscribed to the card
                 */
                subscribed?: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: Card;
            };
        };
        delete: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/{field}': {
        get: {
            req: {
                /**
                 * The desired field.
                 */
                field: CardFields;
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Card;
            };
        };
    };
    '/cards/{id}/actions': {
        get: {
            req: {
                /**
                 * A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
                 */
                filter?: string;
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The page of results for actions. Each page of results has 50 actions.
                 */
                page?: number;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<Action>;
            };
        };
    };
    '/cards/{id}/attachments': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: string;
                /**
                 * Use `cover` to restrict to just the cover attachment
                 */
                filter?: string;
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<(Attachment)>;
            };
        };
        post: {
            req: {
                /**
                 * The file to attach, as multipart/form-data
                 */
                file?: (Blob | File);
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The mimeType of the attachment. Max length 256
                 */
                mimeType?: string;
                /**
                 * The name of the attachment. Max length 256.
                 */
                name?: string;
                /**
                 * Determines whether to use the new attachment as a cover for the Card.
                 */
                setCover?: boolean;
                /**
                 * A URL to attach. Must start with `http://` or `https://`
                 */
                url?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<(Attachment)>;
            };
        };
    };
    '/cards/{id}/attachments/{idAttachment}': {
        get: {
            req: {
                /**
                 * The Attachment fields to be included in the response.
                 */
                fields?: Array<(AttachmentFields)>;
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the Attachment
                 */
                idAttachment: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<(Attachment)>;
            };
        };
        delete: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the attachment to delete
                 */
                idAttachment: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/board': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object)
                 */
                fields?: string;
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/checkItemStates': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of: `idCheckItem`, `state`
                 */
                fields?: string;
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/checklists': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of: `name,nameData,pos,state,type,due,dueReminder,idMember`
                 */
                checkItemFields?: 'name' | 'nameData' | 'pos' | 'state' | 'type' | 'due' | 'dueReminder' | 'idMember';
                /**
                 * `all` or `none`
                 */
                checkItems?: 'all' | 'none';
                /**
                 * `all` or a comma-separated list of: `idBoard,idCard,name,pos`
                 */
                fields?: 'all' | 'name' | 'nameData' | 'pos' | 'state' | 'type';
                /**
                 * `all` or `none`
                 */
                filter?: 'all' | 'none';
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        post: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of a source checklist to copy into the new one
                 */
                idChecklistSource?: TrelloID;
                /**
                 * The name of the checklist
                 */
                name?: string;
                /**
                 * The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
                 */
                pos?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/checkItem/{idCheckItem}': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of `name,nameData,pos,state,type,due,dueReminder,idMember`
                 */
                fields?: string;
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the checkitem
                 */
                idCheckItem: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        put: {
            req: {
                /**
                 * A due date for the checkitem
                 */
                due?: string;
                /**
                 * A dueReminder for the due date on the checkitem
                 */
                dueReminder?: number | null;
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the checkitem
                 */
                idCheckItem: TrelloID;
                /**
                 * The ID of the checklist this item is in
                 */
                idChecklist?: TrelloID;
                /**
                 * The ID of the member to remove from the card
                 */
                idMember?: TrelloID;
                /**
                 * The new name for the checklist item
                 */
                name?: string;
                /**
                 * `top`, `bottom`, or a positive float
                 */
                pos?: posStringOrNumber;
                /**
                 * One of: `complete`, `incomplete`
                 */
                state?: 'complete' | 'incomplete';
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        delete: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the checkitem
                 */
                idCheckItem: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/list': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: string;
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/members': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: string;
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/membersVoted': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: string;
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        post: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the member to vote 'yes' on the card
                 */
                value: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/pluginData': {
        get: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/stickers': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: string;
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        post: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * For custom stickers, the id of the sticker. For default stickers, the string identifier (like 'taco-cool', see below)
                 */
                image: string;
                /**
                 * The left position of the sticker, from -60 to 100
                 */
                left: number;
                /**
                 * The rotation of the sticker
                 */
                rotate?: number;
                /**
                 * The top position of the sticker, from -60 to 100
                 */
                top: number;
                /**
                 * The z-index of the sticker
                 */
                zIndex: number;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/stickers/{idSticker}': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: string;
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the sticker
                 */
                idSticker: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        delete: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the sticker
                 */
                idSticker: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        put: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the sticker
                 */
                idSticker: TrelloID;
                /**
                 * The left position of the sticker, from -60 to 100
                 */
                left: number;
                /**
                 * The rotation of the sticker
                 */
                rotate?: number;
                /**
                 * The top position of the sticker, from -60 to 100
                 */
                top: number;
                /**
                 * The z-index of the sticker
                 */
                zIndex: number;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/actions/{idAction}/comments': {
        put: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the comment action to update
                 */
                idAction: TrelloID;
                /**
                 * The new text for the comment
                 */
                text: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        delete: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the comment action to update
                 */
                idAction: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{idCard}/customField/{idCustomField}/item': {
        put: {
            req: {
                /**
                 * ID of the card that the Custom Field value should be set/updated for
                 */
                idCard: TrelloID;
                /**
                 * ID of the Custom Field on the card.
                 */
                idCustomField: TrelloID;
                requestBody?: {
                    /**
                     * An object containing the key and value to set for the card's Custom Field value. The key used to set the value should match the type of Custom Field defined.
                     */
                    value?: {
                        text?: string;
                        checked?: boolean;
                        date?: string;
                        number?: number;
                    };
                } | {
                    /**
                     * The ID of the option for the list type Custom Field
                     */
                    idValue?: TrelloID;
                };
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{idCard}/customFields': {
        put: {
            req: {
                requestBody?: {
                    /**
                     * An array of objects containing the custom field ID, key and value, and ID of list type option.
                     */
                    customFieldItems?: Array<{
                        /**
                         * The ID of the Custom Field
                         */
                        idCustomField?: unknown;
                        /**
                         * An object containing the key and value to set for the card's Custom Field value. The key used to set the value should match the type of Custom Field defined. This is optional if Custom Field is list type.
                         */
                        value?: {
                            text?: string;
                            checked?: boolean;
                            date?: string;
                            number?: number;
                        };
                        /**
                         * The ID of the option for the list type Custom Field. This is optional if Custom Field is not list type.
                         */
                        idValue?: unknown;
                    }>;
                };
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/customFieldItems': {
        get: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<CustomFieldItems>;
            };
        };
    };
    '/cards/{id}/actions/comments': {
        post: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The comment
                 */
                text: string;
            };
            res: {
                /**
                 * Success
                 */
                200: Action;
            };
        };
    };
    '/cards/{id}/idLabels': {
        post: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the label to add
                 */
                value?: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/idMembers': {
        post: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the Member to add to the card
                 */
                value?: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/labels': {
        post: {
            req: {
                /**
                 * A valid label color or `null`. See [labels](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                color: string;
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * A name for the label
                 */
                name?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/markAssociatedNotificationsRead': {
        post: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/idLabels/{idLabel}': {
        delete: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the label to remove
                 */
                idLabel: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/idMembers/{idMember}': {
        delete: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the member to remove from the card
                 */
                idMember: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{id}/membersVoted/{idMember}': {
        delete: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the member whose vote to remove
                 */
                idMember: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}': {
        put: {
            req: {
                /**
                 * The ID of the Card
                 */
                idCard: TrelloID;
                /**
                 * The ID of the checklist item to update
                 */
                idCheckItem: TrelloID;
                /**
                 * The ID of the item to update.
                 */
                idChecklist: TrelloID;
                /**
                 * `top`, `bottom`, or a positive float
                 */
                pos?: posStringOrNumber;
            };
            res: {
                /**
                 * Success
                 */
                200: CheckItem;
            };
        };
    };
    '/cards/{id}/checklists/{idChecklist}': {
        delete: {
            req: {
                /**
                 * The ID of the Card
                 */
                id: TrelloID;
                /**
                 * The ID of the checklist to delete
                 */
                idChecklist: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/checklists': {
        post: {
            req: {
                /**
                 * The ID of the Card that the checklist should be added to.
                 */
                idCard: TrelloID;
                /**
                 * The ID of a checklist to copy into the new checklist.
                 */
                idChecklistSource?: TrelloID;
                /**
                 * The name of the checklist. Should be a string of length 1 to 16384.
                 */
                name?: string;
                /**
                 * The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
                 */
                pos?: posStringOrNumber;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/checklists/{id}': {
        get: {
            req: {
                /**
                 * Valid values: `all`, `closed`, `none`, `open`, `visible`. Cards is a nested resource. The additional query params available are documented at [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource).
                 */
                cards?: 'all' | 'closed' | 'none' | 'open' | 'visible';
                /**
                 * The fields on the checkItem to return if checkItems are being returned. `all` or a comma-separated list of: `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`
                 */
                checkItemFields?: 'all' | 'name' | 'nameData' | 'pos' | 'state' | 'type' | 'due' | 'dueReminder' | 'idMember';
                /**
                 * The check items on the list to return. One of: `all`, `none`.
                 */
                checkItems?: 'all' | 'none';
                /**
                 * `all` or a comma-separated list of checklist [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: string;
                /**
                 * ID of a checklist.
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        put: {
            req: {
                /**
                 * ID of a checklist.
                 */
                id: TrelloID;
                /**
                 * Name of the new checklist being created. Should be length of 1 to 16384.
                 */
                name?: string;
                /**
                 * Determines the position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
                 */
                pos?: posStringOrNumber;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        delete: {
            req: {
                /**
                 * ID of a checklist.
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/checklists/{id}/{field}': {
        get: {
            req: {
                /**
                 * Field to update.
                 */
                field: 'name' | 'pos';
                /**
                 * ID of a checklist.
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        put: {
            req: {
                /**
                 * Field to update.
                 */
                field: 'name' | 'pos';
                /**
                 * ID of a checklist.
                 */
                id: TrelloID;
                /**
                 * The value to change the checklist name to. Should be a string of length 1 to 16384.
                 */
                value: posStringOrNumber | TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/checklists/{id}/board': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: 'all' | 'name';
                /**
                 * ID of a checklist.
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/checklists/{id}/cards': {
        get: {
            req: {
                /**
                 * ID of a checklist.
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/checklists/{id}/checkItems': {
        get: {
            req: {
                /**
                 * One of: `all`, `name`, `nameData`, `pos`, `state`,`type`, `due`, `dueReminder`, `idMember`.
                 */
                fields?: 'all' | 'name' | 'nameData' | 'pos' | 'state' | 'type' | 'due' | 'dueReminder' | 'idMember';
                /**
                 * One of: `all`, `none`.
                 */
                filter?: 'all' | 'none';
                /**
                 * ID of a checklist.
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        post: {
            req: {
                /**
                 * Determines whether the check item is already checked when created.
                 */
                checked?: boolean;
                /**
                 * A due date for the checkitem
                 */
                due?: string;
                /**
                 * A dueReminder for the due date on the checkitem
                 */
                dueReminder?: number | null;
                /**
                 * ID of a checklist.
                 */
                id: TrelloID;
                /**
                 * An ID of a member resource.
                 */
                idMember?: TrelloID;
                /**
                 * The name of the new check item on the checklist. Should be a string of length 1 to 16384.
                 */
                name: string;
                /**
                 * The position of the check item in the checklist. One of: `top`, `bottom`, or a positive number.
                 */
                pos?: posStringOrNumber;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/checklists/{id}/checkItems/{idCheckItem}': {
        get: {
            req: {
                /**
                 * One of: `all`, `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`,.
                 */
                fields?: 'all' | 'name' | 'nameData' | 'pos' | 'state' | 'type' | 'due' | 'dueReminder' | 'idMember';
                /**
                 * ID of a checklist.
                 */
                id: TrelloID;
                /**
                 * ID of the check item to retrieve.
                 */
                idCheckItem: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        delete: {
            req: {
                /**
                 * ID of a checklist.
                 */
                id: TrelloID;
                /**
                 * ID of the check item to retrieve.
                 */
                idCheckItem: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/customFields': {
        post: {
            req: {
                requestBody?: {
                    /**
                     * The ID of the model for which the Custom Field is being defined. This should always be the ID of a board.
                     */
                    idModel: TrelloID;
                    /**
                     * The type of model that the Custom Field is being defined on. This should always be `board`.
                     */
                    modelType: 'board';
                    /**
                     * The name of the Custom Field
                     */
                    name: string;
                    /**
                     * The type of Custom Field to create.
                     */
                    type: 'checkbox' | 'list' | 'number' | 'text' | 'date';
                    /**
                     * If the type is `checkbox`
                     */
                    options?: string;
                    pos: posStringOrNumber;
                    /**
                     * Whether this Custom Field should be shown on the front of Cards
                     */
                    display_cardFront?: boolean;
                };
            };
            res: {
                /**
                 * Success
                 */
                200: CustomField;
            };
        };
    };
    '/customFields/{id}': {
        get: {
            req: {
                /**
                 * ID of the Custom Field.
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: CustomField;
            };
        };
        put: {
            req: {
                /**
                 * ID of the Custom Field.
                 */
                id: TrelloID;
                requestBody?: {
                    /**
                     * The name of the Custom Field
                     */
                    name?: string;
                    pos?: posStringOrNumber;
                    /**
                     * Whether to display this custom field on the front of cards
                     */
                    'display/cardFront'?: boolean;
                };
            };
            res: {
                /**
                 * Success
                 */
                200: CustomField;
            };
        };
        delete: {
            req: {
                /**
                 * ID of the Custom Field.
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/customFields/{id}/options': {
        post: {
            req: {
                /**
                 * ID of the customfield.
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        get: {
            req: {
                /**
                 * ID of the customfield.
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/customFields/{id}/options/{idCustomFieldOption}': {
        get: {
            req: {
                /**
                 * ID of the customfielditem.
                 */
                id: TrelloID;
                /**
                 * ID of the customfieldoption to retrieve.
                 */
                idCustomFieldOption: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        delete: {
            req: {
                /**
                 * ID of the customfielditem.
                 */
                id: TrelloID;
                /**
                 * ID of the customfieldoption to retrieve.
                 */
                idCustomFieldOption: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/emoji': {
        get: {
            req: {
                /**
                 * The locale to return emoji descriptions and names in. Defaults to the logged in member's locale.
                 */
                locale?: string;
                /**
                 * `true` to return spritesheet URLs in the response
                 */
                spritesheets?: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: Emoji;
            };
        };
    };
    '/enterprises/{id}': {
        get: {
            req: {
                /**
                 * Comma-separated list of: `id`, `name`, `displayName`, `prefs`, `ssoActivationFailed`, `idAdmins`, `idMembers` (Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. Read the SCIM documentation [here]() for more information on filtering), `idOrganizations`, `products`, `userTypes`, `idMembers`, `idOrganizations`
                 */
                fields?: string;
                /**
                 * ID of the enterprise to retrieve.
                 */
                id: TrelloID;
                /**
                 * 0 to 100
                 */
                memberCount?: number;
                /**
                 * One of: `avatarHash`, `fullName`, `initials`, `username`
                 */
                memberFields?: string;
                /**
                 * Pass a [SCIM-style query](/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the member_* args are set, the member array will be paginated.
                 */
                memberFilter?: string;
                /**
                 * One of: `none`, `normal`, `admins`, `owners`, `all`
                 */
                members?: string;
                /**
                 * This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
                 */
                memberSort?: string;
                /**
                 * Deprecated: Please use member_sort. This parameter expects a [SCIM-style sorting value](/cloud/trello/scim/). Note that the members array returned will be paginated if `members` is `normal` or `admins`. Pagination can be controlled with `member_startIndex`, etc, and the API response's header will contain the total count and pagination state.
                 */
                memberSortBy?: string;
                /**
                 * Deprecated: Please use member_sort. One of: `ascending`, `descending`, `asc`, `desc`
                 */
                memberSortOrder?: string;
                /**
                 * Any integer between 0 and 100.
                 */
                memberStartIndex?: number;
                /**
                 * Any valid value that the [nested organization field resource]() accepts.
                 */
                organizationFields?: string;
                /**
                 * Comma-seperated list of: `me`, `normal`, `admin`, `active`, `deactivated`
                 */
                organizationMemberships?: string;
                /**
                 * Whether or not to include paid account information in the returned workspace objects
                 */
                organizationPaidAccounts?: boolean;
                /**
                 * One of: `none`, `members`, `public`, `all`
                 */
                organizations?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: Enterprise;
            };
        };
    };
    '/enterprises/{id}/auditlog': {
        get: {
            req: {
                /**
                 * ID of the enterprise to retrieve.
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<EnterpriseAuditLog>;
            };
        };
    };
    '/enterprises/{id}/admins': {
        get: {
            req: {
                /**
                 * Any valid value that the [nested member field resource]() accepts.
                 */
                fields?: string;
                /**
                 * ID of the enterprise to retrieve.
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Unexpected error
                 */
                200: Error;
                /**
                 * Unauthorized
                 */
                401: Error;
                /**
                 * The specified resource was not found
                 */
                404: Error;
            };
        };
    };
    '/enterprises/{id}/signupUrl': {
        get: {
            req: {
                authenticate?: boolean;
                confirmationAccepted?: boolean;
                /**
                 * ID of the enterprise to retrieve.
                 */
                id: TrelloID;
                /**
                 * Any valid URL.
                 */
                returnUrl?: string | null;
                /**
                 * Designates whether the user has seen/consented to the Trello ToS prior to being redirected to the enterprise signup page/their IdP.
                 */
                tosAccepted?: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: {
                    signupUrl?: string;
                };
            };
        };
    };
    '/enterprises/{id}/members/query': {
        get: {
            req: {
                /**
                 * Returns only Trello users active since this date (inclusive).
                 */
                activeSince?: string;
                /**
                 * When true, returns members who are administrators of the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both admin and non-admin members will be returned.
                 */
                admin?: boolean;
                /**
                 * When true, returns members who are guests on one or more boards in the corresponding Trello Enterprise (but do not possess a license); when false, returns members who are not. If unspecified, both guests and non-guests will be returned.
                 */
                collaborator?: boolean;
                /**
                 * When true, returns members who have been deactivated for the corresponding Trello Enterprise; when false, returns members who have not. If unspecified, both active and deactivated members will be returned.
                 */
                deactivated?: boolean;
                /**
                 * ID of the enterprise to retrieve.
                 */
                id: TrelloID;
                /**
                 * Returns only Trello users active since this date (inclusive).
                 */
                inactiveSince?: string;
                /**
                 * When true, returns members who possess a license for the corresponding Trello Enterprise; when false, returns members who do not. If unspecified, both licensed and unlicensed members will be returned.
                 */
                licensed?: boolean;
                /**
                 * When true, returns members who are managed by the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both managed and unmanaged members will be returned.
                 */
                managed?: boolean;
                /**
                 * Returns members with email address or full name that start with the search value.
                 */
                search?: string;
                /**
                 * Cursor to return next set of results
                 */
                startIndex?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<Membership>;
            };
        };
    };
    '/enterprises/{id}/members': {
        get: {
            req: {
                /**
                 * Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
                 */
                boardFields?: string;
                /**
                 * [SCIM-style filter](/cloud/trello/scim/).
                 */
                count?: string;
                /**
                 * A comma-seperated list of valid [member fields](/cloud/trello/guides/rest-api/object-definitions/#member-object).
                 */
                fields?: string;
                /**
                 * Pass a [SCIM-style query](/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the below member_* args are set, the member array will be paginated.
                 */
                filter?: string | null;
                /**
                 * ID of the Enterprise to retrieve.
                 */
                id: TrelloID;
                /**
                 * Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
                 */
                organizationFields?: string;
                /**
                 * This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
                 */
                sort?: string;
                /**
                 * Deprecated: Please use `sort` instead. This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
                 */
                sortBy?: string;
                /**
                 * Deprecated: Please use `sort` instead. One of: `ascending`, `descending`, `asc`, `desc`.
                 */
                sortOrder?: 'ascending' | 'descending' | 'asc' | 'desc' | null;
                /**
                 * Any integer between 0 and 9999.
                 */
                startIndex?: number;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<Member>;
            };
        };
    };
    '/enterprises/{id}/members/{idMember}': {
        get: {
            req: {
                /**
                 * Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
                 */
                boardFields?: string;
                /**
                 * A comma separated list of any valid values that the [nested member field resource]() accepts.
                 */
                fields?: string;
                /**
                 * ID of the enterprise to retrieve.
                 */
                id: TrelloID;
                /**
                 * An ID of a member resource.
                 */
                idMember: TrelloID;
                /**
                 * Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
                 */
                organizationFields?: string;
            };
            res: {
                /**
                 * Unexpected error
                 */
                200: Error;
                /**
                 * Unauthorized
                 */
                401: Error;
                /**
                 * The specified resource was not found
                 */
                404: Error;
            };
        };
    };
    '/enterprises/{id}/transferrable/organization/{idOrganization}': {
        get: {
            req: {
                /**
                 * ID of the Enterprise to retrieve.
                 */
                id: TrelloID;
                /**
                 * An ID of an Organization resource.
                 */
                idOrganization: TrelloID;
            };
            res: {
                /**
                 * Unexpected error
                 */
                200: Error;
                /**
                 * Unauthorized
                 */
                401: Error;
                /**
                 * The specified resource was not found
                 */
                404: Error;
            };
        };
    };
    '/enterprises/{id}/transferrable/bulk/{idOrganizations}': {
        get: {
            req: {
                /**
                 * ID of the Enterprise to retrieve.
                 */
                id: TrelloID;
                /**
                 * An array of IDs of an Organization resource.
                 */
                idOrganizations: Array<(Organization)>;
            };
            res: {
                /**
                 * Unexpected error
                 */
                200: Error;
                /**
                 * Unauthorized
                 */
                401: Error;
                /**
                 * The specified resource was not found
                 */
                404: Error;
            };
        };
    };
    '/enterprises/${id}/enterpriseJoinRequest/bulk': {
        put: {
            req: {
                /**
                 * ID of the Enterprise to retrieve.
                 */
                id: TrelloID;
                /**
                 * An array of IDs of an Organization resource.
                 */
                idOrganizations: Array<(Organization)>;
            };
            res: {
                /**
                 * Unexpected error
                 */
                200: Error;
                /**
                 * Unauthorized
                 */
                401: Error;
                /**
                 * The specified resource was not found
                 */
                404: Error;
            };
        };
    };
    '/enterprises/{id}/claimableOrganizations': {
        get: {
            req: {
                /**
                 * Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace
                 */
                activeSince?: string;
                /**
                 * Specifies the sort order to return matching documents
                 */
                cursor?: string;
                /**
                 * ID of the enterprise to retrieve
                 */
                id: TrelloID;
                /**
                 * Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace
                 */
                inactiveSince?: string;
                /**
                 * Limits the number of workspaces to be sorted
                 */
                limit?: number;
                /**
                 * Name of the enterprise to retrieve workspaces for
                 */
                name?: string;
            };
            res: {
                /**
                 * Unexpected erorr
                 */
                200: Error;
                /**
                 * Unauthorized
                 */
                401: Error;
                /**
                 * The specified resource was not found
                 */
                404: Error;
            };
        };
    };
    '/enterprises/{id}/pendingOrganizations': {
        get: {
            req: {
                /**
                 * Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace
                 */
                activeSince?: string;
                /**
                 * ID of the enterprise to retrieve
                 */
                id: TrelloID;
                /**
                 * Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace
                 */
                inactiveSince?: string;
            };
            res: {
                /**
                 * Unexpected erorr
                 */
                200: Error;
                /**
                 * Unauthorized
                 */
                401: Error;
                /**
                 * The specified resource was not found
                 */
                404: Error;
            };
        };
    };
    '/enterprises/{id}/tokens': {
        post: {
            req: {
                /**
                 * One of: `1hour`, `1day`, `30days`, `never`
                 */
                expiration?: string;
                /**
                 * ID of the enterprise to retrieve.
                 */
                id: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/enterprises/{id}/organizations': {
        put: {
            req: {
                /**
                 * ID of the Enterprise to retrieve.
                 */
                id: TrelloID;
                /**
                 * ID of Organization to be transferred to Enterprise.
                 */
                idOrganization: string;
            };
            res: {
                /**
                 * Unexpected error
                 */
                200: Error;
                /**
                 * Unauthorized
                 */
                401: Error;
                /**
                 * The specified resource was not found
                 */
                404: Error;
            };
        };
    };
    '/enterprises/{id}/members/{idMember}/licensed': {
        put: {
            req: {
                /**
                 * ID of the Enterprise.
                 */
                id: TrelloID;
                /**
                 * The ID of the Member
                 */
                idMember: TrelloID;
                /**
                 * Boolean value to determine whether the user should be given an Enterprise license (true) or not (false).
                 */
                value: boolean;
            };
            res: {
                /**
                 * Unexpected error
                 */
                200: Error;
                /**
                 * Unauthorized
                 */
                401: Error;
                /**
                 * The specified resource was not found
                 */
                404: Error;
            };
        };
    };
    '/enterprises/{id}/members/{idMember}/deactivated': {
        put: {
            req: {
                /**
                 * Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
                 */
                boardFields?: BoardFields;
                /**
                 * A comma separated list of any valid values that the [nested member field resource]() accepts.
                 */
                fields?: MemberFields;
                /**
                 * ID of the enterprise to retrieve.
                 */
                id: TrelloID;
                /**
                 * ID of the Member to deactive.
                 */
                idMember: TrelloID;
                /**
                 * Any valid value that the [nested organization resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
                 */
                organizationFields?: OrganizationFields;
                /**
                 * Determines whether the user is deactivated or not.
                 */
                value: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/enterprises/{id}/admins/{idMember}': {
        put: {
            req: {
                /**
                 * ID of the enterprise to retrieve.
                 */
                id: TrelloID;
                /**
                 * ID of member to be made an admin of enterprise.
                 */
                idMember: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        delete: {
            req: {
                /**
                 * ID of the Enterprise to retrieve.
                 */
                id: TrelloID;
                /**
                 * ID of the member to be removed as an admin from enterprise.
                 */
                idMember: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/enterprises/{id}/organizations/{idOrg}': {
        delete: {
            req: {
                /**
                 * ID of the enterprise to retrieve.
                 */
                id: TrelloID;
                /**
                 * ID of the organization to be removed from the enterprise.
                 */
                idOrg: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/enterprises/{id}/organizations/bulk/{idOrganizations}': {
        get: {
            req: {
                /**
                 * ID of the enterprise to retrieve.
                 */
                id: TrelloID;
                /**
                 * An array of IDs of the organizations to be removed from the enterprise.
                 */
                idOrganizations: Array<(Organization)>;
            };
            res: {
                /**
                 * Unexpected Error
                 */
                200: Error;
                /**
                 * Unauthorized
                 */
                401: Error;
                /**
                 * The specified resource was not found
                 */
                404: Error;
            };
        };
    };
    '/labels/{id}': {
        get: {
            req: {
                /**
                 * all or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: string;
                /**
                 * The ID of the Label
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        put: {
            req: {
                /**
                 * The new color for the label. See: [fields](/cloud/trello/guides/rest-api/object-definitions/) for color options
                 */
                color?: Color;
                /**
                 * The ID of the Label
                 */
                id: TrelloID;
                /**
                 * The new name for the label
                 */
                name?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        delete: {
            req: {
                /**
                 * The ID of the Label
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/labels/{id}/{field}': {
        put: {
            req: {
                /**
                 * The field on the Label to update.
                 */
                field: 'color' | 'name';
                /**
                 * The id of the label
                 */
                id: string;
                /**
                 * The new value for the field.
                 */
                value: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/labels': {
        post: {
            req: {
                /**
                 * The color for the label.
                 */
                color: Color;
                /**
                 * The ID of the Board to create the Label on.
                 */
                idBoard: string;
                /**
                 * Name for the label
                 */
                name: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/lists/{id}': {
        get: {
            req: {
                /**
                 * `all` or a comma separated list of List field names.
                 */
                fields?: string;
                /**
                 * The ID of the list
                 */
                id: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        put: {
            req: {
                /**
                 * Whether the list should be closed (archived)
                 */
                closed?: boolean;
                /**
                 * The ID of the list
                 */
                id: string;
                /**
                 * ID of a board the list should be moved to
                 */
                idBoard?: TrelloID;
                /**
                 * New name for the list
                 */
                name?: string;
                /**
                 * New position for the list: `top`, `bottom`, or a positive floating point number
                 */
                pos?: number | 'top' | 'bottom';
                /**
                 * Whether the active member is subscribed to this list
                 */
                subscribed?: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/lists': {
        post: {
            req: {
                /**
                 * The long ID of the board the list should be created on
                 */
                idBoard: TrelloID;
                /**
                 * ID of the List to copy into the new List
                 */
                idListSource?: TrelloID;
                /**
                 * Name for the list
                 */
                name: string;
                /**
                 * Position of the list. `top`, `bottom`, or a positive floating point number
                 */
                pos?: number | 'top' | 'bottom';
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/lists/{id}/archiveAllCards': {
        post: {
            req: {
                /**
                 * The ID of the list
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/lists/{id}/moveAllCards': {
        post: {
            req: {
                /**
                 * The ID of the list
                 */
                id: TrelloID;
                /**
                 * The ID of the board the cards should be moved to
                 */
                idBoard: TrelloID;
                /**
                 * The ID of the list that the cards should be moved to
                 */
                idList: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/lists/{id}/closed': {
        put: {
            req: {
                /**
                 * The ID of the list
                 */
                id: TrelloID;
                /**
                 * Set to true to close (archive) the list
                 */
                value?: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/lists/{id}/idBoard': {
        put: {
            req: {
                /**
                 * The ID of the list
                 */
                id: TrelloID;
                /**
                 * The ID of the board to move the list to
                 */
                value: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/lists/{id}/{field}': {
        put: {
            req: {
                /**
                 * The field on the List to be updated
                 */
                field: 'name' | 'pos' | 'subscribed';
                /**
                 * The ID of the list
                 */
                id: TrelloID;
                /**
                 * The new value for the field
                 */
                value?: string | number | 'top' | 'bottom' | boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/lists/{id}/actions': {
        get: {
            req: {
                /**
                 * A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
                 */
                filter?: string;
                /**
                 * The ID of the list
                 */
                id: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/lists/{id}/board': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object)
                 */
                fields?: string;
                /**
                 * The ID of the list
                 */
                id: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/lists/{id}/cards': {
        get: {
            req: {
                /**
                 * The ID of the list
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<Card>;
            };
        };
    };
    '/members/{id}': {
        get: {
            req: {
                /**
                 * See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)
                 */
                actions?: string;
                /**
                 * One of: `all`, `custom`, `default`, `none`, `premium`
                 */
                boardBackgrounds?: 'all' | 'custom' | 'default' | 'none' | 'premium';
                /**
                 * See the [Boards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#boards-nested-resource)
                 */
                boards?: string;
                /**
                 * `all` or a comma-separated list of: closed, members, open, organization, pinned, public, starred, unpinned
                 */
                boardsInvited?: 'closed' | 'members' | 'open' | 'organization' | 'pinned' | 'public' | 'starred' | 'unpinned';
                /**
                 * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                boardsInvitedFields?: BoardFields;
                /**
                 * Whether to return the boardStars or not
                 */
                boardStars?: boolean;
                /**
                 * See the [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource) for additional options
                 */
                cards?: string;
                /**
                 * `all` or `none`
                 */
                customBoardBackgrounds?: 'all' | 'none';
                /**
                 * `all` or `none`
                 */
                customEmoji?: 'all' | 'none';
                /**
                 * `all` or `none`
                 */
                customStickers?: 'all' | 'none';
                /**
                 * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: MemberFields;
                /**
                 * The ID or username of the member
                 */
                id: TrelloID | string;
                /**
                 * See the [Notifications Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#notifications-nested-resource)
                 */
                notifications?: string;
                /**
                 * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                organizationFields?: OrganizationFields;
                /**
                 * Whether or not to include paid account information in the returned workspace object
                 */
                organizationPaidAccount?: boolean;
                /**
                 * One of: `all`, `members`, `none`, `public`
                 */
                organizations?: 'all' | 'members' | 'none' | 'public';
                /**
                 * One of: `all`, `members`, `none`, `public`
                 */
                organizationsInvited?: 'all' | 'members' | 'none' | 'public';
                /**
                 * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                organizationsInvitedFields?: OrganizationFields;
                /**
                 * Whether or not to include paid account information in the returned member object
                 * @deprecated
                 */
                paidAccount?: boolean;
                savedSearches?: boolean;
                /**
                 * `all` or `none`
                 */
                tokens?: 'all' | 'none';
            };
            res: {
                /**
                 * Success
                 */
                200: Member;
            };
        };
        put: {
            req: {
                /**
                 * One of: `gravatar`, `none`, `upload`
                 */
                avatarSource?: 'gravatar' | 'none' | 'upload';
                bio?: string;
                /**
                 * New name for the member. Cannot begin or end with a space.
                 */
                fullName?: string;
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
                /**
                 * New initials for the member. 1-4 characters long.
                 */
                initials?: string;
                prefsColorBlind?: boolean;
                prefsLocale?: string;
                /**
                 * `-1` for disabled, `1`, or `60`
                 */
                prefsMinutesBetweenSummaries?: number;
                /**
                 * New username for the member. At least 3 characters long, only lowercase letters, underscores, and numbers. Must be unique.
                 */
                username?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: Member;
            };
        };
    };
    '/members/{id}/{field}': {
        get: {
            req: {
                /**
                 * One of the member [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                field: MemberFields;
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Member;
            };
        };
    };
    '/members/{id}/actions': {
        get: {
            req: {
                /**
                 * A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
                 */
                filter?: string;
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<(Member)>;
            };
        };
    };
    '/members/{id}/boardBackgrounds': {
        get: {
            req: {
                /**
                 * One of: `all`, `custom`, `default`, `none`, `premium`
                 */
                filter?: 'all' | 'custom' | 'default' | 'none' | 'premium';
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<(BoardBackground)>;
            };
        };
        post: {
            req: {
                file: (Blob | File);
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<(BoardBackground)>;
            };
        };
    };
    '/members/{id}/boardBackgrounds/{idBackground}': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of: `brightness`, `fullSizeUrl`, `scaled`, `tile`
                 */
                fields?: 'all' | 'brightness' | 'fullSizeUrl' | 'scaled' | 'tile';
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
                /**
                 * The ID of the board background
                 */
                idBackground: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: BoardBackground;
            };
        };
        put: {
            req: {
                /**
                 * One of: `dark`, `light`, `unknown`
                 */
                brightness?: 'dark' | 'light' | 'unknown';
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
                /**
                 * The ID of the board background
                 */
                idBackground: TrelloID;
                /**
                 * Whether the background should be tiled
                 */
                tile?: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: BoardBackground;
            };
        };
        delete: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
                /**
                 * The ID of the board background
                 */
                idBackground: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/members/{id}/boardStars': {
        get: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        post: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID | string;
                /**
                 * The ID of the board to star
                 */
                idBoard: TrelloID;
                /**
                 * The position of the newly starred board. `top`, `bottom`, or a positive float.
                 */
                pos: posStringOrNumber;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<BoardStars>;
            };
        };
    };
    '/members/{id}/boardStars/{idStar}': {
        get: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
                /**
                 * The ID of the board star
                 */
                idStar: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: BoardStars;
            };
        };
        put: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
                /**
                 * The ID of the board star
                 */
                idStar: TrelloID;
                /**
                 * New position for the starred board. `top`, `bottom`, or a positive float.
                 */
                pos?: posStringOrNumber;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        delete: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
                /**
                 * The ID of the board star
                 */
                idStar: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/members/{id}/boards': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: BoardFields;
                /**
                 * `all` or a comma-separated list of: `closed`, `members`, `open`, `organization`, `public`, `starred`
                 */
                filter?: 'all' | 'closed' | 'members' | 'open' | 'organization' | 'public' | 'starred';
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
                /**
                 * Which lists to include with the boards. One of: `all`, `closed`, `none`, `open`
                 */
                lists?: 'all' | 'closed' | 'none' | 'open';
                /**
                 * Whether to include the Organization object with the Boards
                 */
                organization?: boolean;
                /**
                 * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                organizationFields?: OrganizationFields;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<Board>;
            };
        };
    };
    '/members/{id}/boardsInvited': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: BoardFields;
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<Board>;
            };
        };
    };
    '/members/{id}/cards': {
        get: {
            req: {
                /**
                 * One of: `all`, `closed`, `none`, `open`, `visible`
                 */
                filter?: 'all' | 'closed' | 'none' | 'open' | 'visible';
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<Card>;
            };
        };
    };
    '/members/{id}/customBoardBackgrounds': {
        get: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<BoardBackground>;
            };
        };
        post: {
            req: {
                file: (Blob | File);
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: BoardBackground;
            };
        };
    };
    '/members/{id}/customBoardBackgrounds/{idBackground}': {
        get: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID | string;
                /**
                 * The ID of the custom background
                 */
                idBackground: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: BoardBackground;
            };
        };
        put: {
            req: {
                /**
                 * One of: `dark`, `light`, `unknown`
                 */
                brightness?: 'dark' | 'light' | 'unknown';
                /**
                 * The ID or username of the member
                 */
                id: TrelloID | string;
                /**
                 * The ID of the custom background
                 */
                idBackground: TrelloID;
                /**
                 * Whether to tile the background
                 */
                tile?: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: BoardBackground;
            };
        };
        delete: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID | string;
                /**
                 * The ID of the custom background
                 */
                idBackground: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/members/{id}/customEmoji': {
        get: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<CustomEmoji>;
            };
        };
        post: {
            req: {
                file: (Blob | File);
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
                /**
                 * Name for the emoji. 2 - 64 characters
                 */
                name: string;
            };
            res: {
                /**
                 * Success
                 */
                200: CustomEmoji;
            };
        };
    };
    '/members/{id}/customEmoji/{idEmoji}': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of `name`, `url`
                 */
                fields?: 'name' | 'url' | 'all';
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
                /**
                 * The ID of the custom emoji
                 */
                idEmoji: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: CustomEmoji;
            };
        };
    };
    '/members/{id}/customStickers': {
        get: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<CustomSticker>;
            };
        };
        post: {
            req: {
                file: (Blob | File);
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: CustomSticker;
            };
        };
    };
    '/members/{id}/customStickers/{idSticker}': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of `scaled`, `url`
                 */
                fields?: 'scaled' | 'url' | 'all';
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
                /**
                 * The ID of the uploaded sticker
                 */
                idSticker: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: CustomSticker;
            };
        };
        delete: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
                /**
                 * The ID of the uploaded sticker
                 */
                idSticker: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/members/{id}/notifications': {
        get: {
            req: {
                /**
                 * A notification ID
                 */
                before?: string;
                display?: boolean;
                entities?: boolean;
                /**
                 * `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: string;
                filter?: string;
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
                /**
                 * Max 1000
                 */
                limit?: number;
                memberCreator?: boolean;
                /**
                 * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                memberCreatorFields?: string;
                /**
                 * Max 100
                 */
                page?: number;
                /**
                 * One of: `all`, `read`, `unread`
                 */
                readFilter?: string;
                /**
                 * A notification ID
                 */
                since?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<Notification>;
            };
        };
    };
    '/members/{id}/organizations': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: OrganizationFields;
                /**
                 * One of: `all`, `members`, `none`, `public` (Note: `members` filters to only private Workspaces)
                 */
                filter?: 'all' | 'members' | 'none' | 'public';
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
                /**
                 * Whether or not to include paid account information in the returned workspace object
                 */
                paidAccount?: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<Organization>;
            };
        };
    };
    '/members/{id}/organizationsInvited': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: OrganizationFields;
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<Organization>;
            };
        };
    };
    '/members/{id}/savedSearches': {
        get: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<SavedSearch>;
            };
        };
        post: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
                /**
                 * The name for the saved search
                 */
                name: string;
                /**
                 * The position of the saved search. `top`, `bottom`, or a positive float.
                 */
                pos: posStringOrNumber;
                /**
                 * The search query
                 */
                query: string;
            };
            res: {
                /**
                 * Success
                 */
                200: SavedSearch;
            };
        };
    };
    '/members/{id}/savedSearches/{idSearch}': {
        get: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: string;
                /**
                 * The ID of the saved search to delete
                 */
                idSearch: string;
            };
            res: {
                /**
                 * Success
                 */
                200: SavedSearch;
            };
        };
        put: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: string;
                /**
                 * The ID of the saved search to delete
                 */
                idSearch: string;
                /**
                 * The new name for the saved search
                 */
                name?: string;
                /**
                 * New position for saves search. `top`, `bottom`, or a positive float.
                 */
                pos?: string;
                /**
                 * The new search query
                 */
                query?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: SavedSearch;
            };
        };
        delete: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: string;
                /**
                 * The ID of the saved search to delete
                 */
                idSearch: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/members/{id}/tokens': {
        get: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
                /**
                 * Whether to include webhooks
                 */
                webhooks?: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<Token>;
            };
        };
    };
    '/members/{id}/avatar': {
        post: {
            req: {
                file: (Blob | File);
                /**
                 * The ID or username of the member
                 */
                id: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/members/{id}/oneTimeMessagesDismissed': {
        post: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID;
                /**
                 * The message to dismiss
                 */
                value: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/members/{id}/notificationsChannelSettings': {
        get: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID | string;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<NotificationChannelSettings>;
            };
        };
        put: {
            req: {
                /**
                 * The ID or username of the member
                 */
                id: TrelloID | string;
                requestBody: {
                    channel: Channel;
                    /**
                     * Blocked key or array of blocked keys.
                     */
                    blockedKeys: BlockedKey | Array<BlockedKey>;
                };
            };
            res: {
                /**
                 * Success
                 */
                200: NotificationChannelSettings;
            };
        };
    };
    '/members/{id}/notificationsChannelSettings/{channel}': {
        get: {
            req: {
                /**
                 * Channel to block notifications on
                 */
                channel: Channel;
                /**
                 * The ID or username of the member
                 */
                id: TrelloID | string;
            };
            res: {
                /**
                 * Success
                 */
                200: NotificationChannelSettings;
            };
        };
        put: {
            req: {
                /**
                 * Channel to block notifications on
                 */
                channel: Channel;
                /**
                 * The ID or username of the member
                 */
                id: TrelloID | string;
                requestBody: {
                    /**
                     * Singular key or array of notification keys
                     */
                    blockedKeys: BlockedKey | Array<BlockedKey>;
                };
            };
            res: {
                /**
                 * Success
                 */
                200: NotificationChannelSettings;
            };
        };
    };
    '/members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}': {
        put: {
            req: {
                /**
                 * Singular key or comma-separated list of notification keys
                 */
                blockedKeys: BlockedKey;
                /**
                 * Channel to block notifications on
                 */
                channel: Channel;
                /**
                 * The ID or username of the member
                 */
                id: TrelloID | string;
            };
            res: {
                /**
                 * Success
                 */
                200: NotificationChannelSettings;
            };
        };
    };
    '/notifications/{id}': {
        get: {
            req: {
                /**
                 * Whether to include the board object
                 */
                board?: boolean;
                /**
                 * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                boardFields?: BoardFields;
                /**
                 * Whether to include the card object
                 */
                card?: boolean;
                /**
                 * `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                cardFields?: CardFields;
                /**
                 * Whether to include the display object with the results
                 */
                display?: boolean;
                /**
                 * Whether to include the entities object with the results
                 */
                entities?: boolean;
                /**
                 * `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: NotificationFields;
                /**
                 * The ID of the notification
                 */
                id: TrelloID;
                /**
                 * Whether to include the list object
                 */
                list?: boolean;
                /**
                 * Whether to include the member object
                 */
                member?: boolean;
                /**
                 * Whether to include the member object of the creator
                 */
                memberCreator?: boolean;
                /**
                 * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                memberCreatorFields?: MemberFields;
                /**
                 * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                memberFields?: MemberFields;
                /**
                 * Whether to include the organization object
                 */
                organization?: boolean;
                /**
                 * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                organizationFields?: OrganizationFields;
            };
            res: {
                /**
                 * Success
                 */
                200: Notification;
            };
        };
        put: {
            req: {
                /**
                 * The ID of the notification
                 */
                id: TrelloID;
                /**
                 * Whether the notification should be marked as read or not
                 */
                unread?: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: Notification;
            };
        };
    };
    '/notifications/{id}/{field}': {
        get: {
            req: {
                /**
                 * A notification [field](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                field: NotificationFields;
                /**
                 * The ID of the notification
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Notification;
            };
        };
    };
    '/notifications/all/read': {
        post: {
            req: {
                /**
                 * A comma-seperated list of IDs. Allows specifying an array of notification IDs to change the read state for. This will become useful as we add grouping of notifications to the UI, with a single button to mark all notifications in the group as read/unread.
                 */
                ids?: Array<TrelloID>;
                /**
                 * Boolean to specify whether to mark as read or unread (defaults to `true`, marking as read)
                 */
                read?: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: Notification;
            };
        };
    };
    '/notifications/{id}/unread': {
        put: {
            req: {
                /**
                 * The ID of the notification
                 */
                id: TrelloID;
                value?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: Notification;
            };
        };
    };
    '/notifications/{id}/board': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of board[fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: BoardFields;
                /**
                 * The ID of the notification
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Board;
            };
        };
    };
    '/notifications/{id}/card': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: CardFields;
                /**
                 * The ID of the notification
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Card;
            };
        };
    };
    '/notifications/{id}/list': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: ListFields;
                /**
                 * The ID of the notification
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: TrelloList;
            };
        };
    };
    '/notifications/{id}/member': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: MemberFields;
                /**
                 * The ID of the notification
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Member;
            };
        };
    };
    '/notifications/{id}/memberCreator': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: MemberFields;
                /**
                 * The ID of the notification
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Member;
            };
        };
    };
    '/notifications/{id}/organization': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: OrganizationFields;
                /**
                 * The ID of the notification
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Organization;
            };
        };
    };
    '/organizations': {
        post: {
            req: {
                /**
                 * The description for the organizations
                 */
                desc?: string;
                /**
                 * The name to display for the Organization
                 */
                displayName: string;
                /**
                 * A string with a length of at least 3. Only lowercase letters, underscores, and numbers are allowed. If the name contains invalid characters, they will be removed. If the name conflicts with an existing name, a new name will be substituted.
                 */
                name?: string;
                /**
                 * A URL starting with `http://` or `https://`
                 */
                website?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: Organization;
            };
        };
    };
    '/organizations/{id}': {
        get: {
            req: {
                /**
                 * The ID or name of the Organization
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Organization;
            };
        };
        put: {
            req: {
                /**
                 * A new description for the organization
                 */
                desc?: string;
                /**
                 * A new displayName for the organization. Must be at least 1 character long and not begin or end with a space.
                 */
                displayName?: string;
                /**
                 * The ID or name of the Organization
                 */
                id: TrelloID;
                /**
                 * A new name for the organization. At least 3 lowercase letters, underscores, and numbers. Must be unique
                 */
                name?: string;
                /**
                 * The Google Apps domain to link this org to.
                 */
                prefsAssociatedDomain?: string;
                /**
                 * Who on the Workspace can make Workspace visible boards. One of `admin`, `none`, `org`
                 */
                prefsBoardVisibilityRestrictOrg?: string;
                /**
                 * Who can make private boards. One of: `admin`, `none`, `org`
                 */
                prefsBoardVisibilityRestrictPrivate?: string;
                /**
                 * Who on the Workspace can make public boards. One of: `admin`, `none`, `org`
                 */
                prefsBoardVisibilityRestrictPublic?: string;
                /**
                 * Whether non-workspace members can be added to boards inside the Workspace
                 */
                prefsExternalMembersDisabled?: boolean;
                /**
                 * `1` or `2`
                 */
                prefsGoogleAppsVersion?: number;
                /**
                 * An email address with optional wildcard characters. (E.g. `subdomain.*.trello.com`)
                 */
                prefsOrgInviteRestrict?: string;
                /**
                 * Whether the Workspace page is publicly visible. One of: `private`, `public`
                 */
                prefsPermissionLevel?: string;
                /**
                 * A URL starting with `http://`, `https://`, or `null`
                 */
                website?: string;
            };
            res: {
                /**
                 * Success
                 */
                200: Organization;
            };
        };
        delete: {
            req: {
                /**
                 * The ID or name of the Organization
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/organizations/{id}/{field}': {
        get: {
            req: {
                /**
                 * An organization [field](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                field: OrganizationFields;
                /**
                 * The ID or name of the organization
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Organization;
            };
        };
    };
    '/organizations/{id}/actions': {
        get: {
            req: {
                /**
                 * The ID or name of the organization
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<Action>;
            };
        };
    };
    '/organizations/{id}/boards': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
                 */
                fields?: BoardFields;
                /**
                 * `all` or a comma-separated list of: `open`, `closed`, `members`, `organization`, `public`
                 */
                filter?: 'all' | 'open' | 'closed' | 'members' | 'organization' | 'public';
                /**
                 * The ID or name of the organization
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<(Board)>;
            };
        };
    };
    '/organizations/{id}/exports': {
        post: {
            req: {
                /**
                 * Whether the CSV should include attachments or not.
                 */
                attachments?: boolean;
                /**
                 * The ID or name of the Workspace
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Export;
            };
        };
        get: {
            req: {
                /**
                 * The ID or name of the Workspace
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<Export>;
            };
        };
    };
    '/organizations/{id}/members': {
        get: {
            req: {
                /**
                 * The ID or name of the Organization
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<(Member)>;
            };
        };
        put: {
            req: {
                /**
                 * An email address
                 */
                email: string;
                /**
                 * Name for the member, at least 1 character not beginning or ending with a space
                 */
                fullName: string;
                /**
                 * The ID or name of the organization
                 */
                id: TrelloID;
                /**
                 * One of: `admin`, `normal`
                 */
                type?: 'admin' | 'normal';
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/organizations/{id}/memberships': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of: `active`, `admin`, `deactivated`, `me`, `normal`
                 */
                filter?: 'all' | 'active' | 'admin' | 'deactivated' | 'me' | 'normal';
                /**
                 * The ID or name of the organization
                 */
                id: TrelloID;
                /**
                 * Whether to include the Member objects with the Memberships
                 */
                member?: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<(Memberships)>;
            };
        };
    };
    '/organizations/{id}/memberships/{idMembership}': {
        get: {
            req: {
                /**
                 * The ID or name of the organization
                 */
                id: TrelloID;
                /**
                 * The ID of the membership to load
                 */
                idMembership: TrelloID;
                /**
                 * Whether to include the Member object in the response
                 */
                member?: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: Memberships;
            };
        };
    };
    '/organizations/{id}/pluginData': {
        get: {
            req: {
                /**
                 * The ID or name of the organization
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<(PluginData)>;
            };
        };
    };
    '/organizations/{id}/tags': {
        get: {
            req: {
                /**
                 * The ID or name of the Organization
                 */
                id: string | TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<(Tag)>;
            };
        };
        post: {
            req: {
                /**
                 * The ID or name of the Organization
                 */
                id: string | TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Tag;
            };
        };
    };
    '/organizations/{id}/members/{idMember}': {
        put: {
            req: {
                /**
                 * The ID or name of the organization
                 */
                id: TrelloID;
                /**
                 * The ID or username of the member to update
                 */
                idMember: string | TrelloID;
                /**
                 * One of: `admin`, `normal`
                 */
                type: 'admin' | 'normal';
            };
            res: {
                /**
                 * Success
                 */
                200: Member;
            };
        };
        delete: {
            req: {
                /**
                 * The ID or name of the organization
                 */
                id: TrelloID | string;
                /**
                 * The ID of the Member to remove from the Workspace
                 */
                idMember: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/organizations/{id}/members/{idMember}/deactivated': {
        put: {
            req: {
                /**
                 * The ID or name of the organization
                 */
                id: TrelloID;
                /**
                 * The ID or username of the member to update
                 */
                idMember: TrelloID | string;
                value: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/organizations/{id}/logo': {
        post: {
            req: {
                /**
                 * Image file for the logo
                 */
                file?: (Blob | File);
                /**
                 * The ID or name of the Workspace
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Organization;
            };
        };
        delete: {
            req: {
                /**
                 * The ID or name of the organization
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/organizations/{id}/members/{idMember}/all': {
        delete: {
            req: {
                /**
                 * The ID or name of the organization
                 */
                id: TrelloID;
                /**
                 * The ID of the member to remove from the Workspace
                 */
                idMember: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/organizations/{id}/prefs/associatedDomain': {
        delete: {
            req: {
                /**
                 * The ID or name of the organization
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/organizations/{id}/prefs/orgInviteRestrict': {
        delete: {
            req: {
                /**
                 * The ID or name of the organization
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/organizations/{id}/tags/{idTag}': {
        delete: {
            req: {
                /**
                 * The ID or name of the organization
                 */
                id: string;
                /**
                 * The ID of the tag to delete
                 */
                idTag: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/organizations/{id}/newBillableGuests/{idBoard}': {
        get: {
            req: {
                /**
                 * The ID or name of the organization
                 */
                id: TrelloID;
                /**
                 * The ID of the board to check for new billable guests.
                 */
                idBoard: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/plugins/{id}/': {
        get: {
            req: {
                /**
                 * The ID or name of the organization
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Plugin;
            };
        };
        put: {
            req: {
                /**
                 * The ID or name of the organization
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Plugin;
            };
        };
    };
    '/plugins/{idPlugin}/listing': {
        post: {
            req: {
                /**
                 * The ID of the Power-Up for which you are creating a new listing.
                 */
                idPlugin: TrelloID;
                requestBody?: {
                    /**
                     * The description to show for the given locale
                     */
                    description?: string;
                    /**
                     * The locale that this listing should be displayed for.
                     */
                    locale?: string;
                    /**
                     * The overview to show for the given locale.
                     */
                    overview?: string;
                    /**
                     * The name to use for the given locale.
                     */
                    name?: string;
                };
            };
            res: {
                /**
                 * Success
                 */
                200: PluginListing;
            };
        };
    };
    '/plugins/{id}/compliance/memberPrivacy': {
        get: {
            req: {
                /**
                 * The ID of the Power-Up
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/plugins/{idPlugin}/listings/{idListing}': {
        put: {
            req: {
                /**
                 * The ID of the existing listing for the Power-Up that is being updated.
                 */
                idListing: TrelloID;
                /**
                 * The ID of the Power-Up whose listing is being updated.
                 */
                idPlugin: TrelloID;
                requestBody?: {
                    /**
                     * The description to show for the given locale
                     */
                    description?: string;
                    /**
                     * The locale that this listing should be displayed for.
                     */
                    locale?: string;
                    /**
                     * The overview to show for the given locale.
                     */
                    overview?: string;
                    /**
                     * The name to use for the given locale.
                     */
                    name?: string;
                };
            };
            res: {
                /**
                 * Success
                 */
                200: PluginListing;
            };
        };
    };
    '/search': {
        get: {
            req: {
                /**
                 * all or a comma-separated list of: `closed`, `dateLastActivity`, `dateLastView`, `desc`, `descData`, `idOrganization`, `invitations`, `invited`, `labelNames`, `memberships`, `name`, `pinned`, `powerUps`, `prefs`, `shortLink`, `shortUrl`, `starred`, `subscribed`, `url`
                 */
                boardFields?: string;
                /**
                 * Whether to include the parent organization with board results
                 */
                boardOrganization?: boolean;
                /**
                 * The maximum number of boards returned. Maximum: 1000
                 */
                boardsLimit?: number;
                /**
                 * Whether to include attachment objects with card results. A boolean value (true or false) or cover for only card cover attachments.
                 */
                cardAttachments?: string;
                /**
                 * Whether to include the parent board with card results
                 */
                cardBoard?: boolean;
                /**
                 * all or a comma-separated list of: `badges`, `checkItemStates`, `closed`, `dateLastActivity`, `desc`, `descData`, `due`, `idAttachmentCover`, `idBoard`, `idChecklists`, `idLabels`, `idList`, `idMembers`, `idMembersVoted`, `idShort`, `labels`, `manualCoverAttachment`, `name`, `pos`, `shortLink`, `shortUrl`, `subscribed`, `url`
                 */
                cardFields?: string;
                /**
                 * Whether to include the parent list with card results
                 */
                cardList?: boolean;
                /**
                 * Whether to include member objects with card results
                 */
                cardMembers?: boolean;
                /**
                 * The maximum number of cards to return. Maximum: 1000
                 */
                cardsLimit?: number;
                /**
                 * The page of results for cards. Maximum: 100
                 */
                cardsPage?: number;
                /**
                 * Whether to include sticker objects with card results
                 */
                cardStickers?: boolean;
                /**
                 * `mine` or a comma-separated list of Board IDs
                 */
                idBoards?: 'mine' | TrelloID;
                /**
                 * A comma-separated list of Card IDs
                 */
                idCards?: string;
                /**
                 * A comma-separated list of Organization IDs
                 */
                idOrganizations?: string;
                /**
                 * all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username
                 */
                memberFields?: string;
                /**
                 * The maximum number of members to return. Maximum 1000
                 */
                membersLimit?: number;
                /**
                 * What type or types of Trello objects you want to search. all or a comma-separated list of: `actions`, `boards`, `cards`, `members`, `organizations`
                 */
                modelTypes?: string;
                /**
                 * all or a comma-separated list of billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website
                 */
                organizationFields?: string;
                /**
                 * The maximum number of Workspaces to return. Maximum 1000
                 */
                organizationsLimit?: number;
                /**
                 * By default, Trello searches for each word in your query against exactly matching words within Member content. Specifying partial to be true means that we will look for content that starts with any of the words in your query.  If you are looking for a Card titled "My Development Status Report", by default you would need to search for "Development". If you have partial enabled, you will be able to search for "dev" but not "velopment".
                 */
                partial?: boolean;
                /**
                 * The search query with a length of 1 to 16384 characters
                 */
                query: string;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<(Member | Card | Board | Organization)>;
            };
        };
    };
    '/search/members/': {
        get: {
            req: {
                idBoard?: TrelloID;
                idOrganization?: TrelloID;
                /**
                 * The maximum number of results to return. Maximum of 20.
                 */
                limit?: number;
                onlyOrgMembers?: boolean;
                /**
                 * Search query 1 to 16384 characters long
                 */
                query: string;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<Member>;
            };
        };
    };
    '/tokens/{token}': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of `dateCreated`, `dateExpires`, `idMember`, `identifier`, `permissions`
                 */
                fields?: TokenFields;
                token: string;
                /**
                 * Determines whether to include webhooks.
                 */
                webhooks?: boolean;
            };
            res: {
                /**
                 * Success
                 */
                200: Token;
            };
        };
    };
    '/tokens/{token}/member': {
        get: {
            req: {
                /**
                 * `all` or a comma-separated list of valid fields for [Member Object](/cloud/trello/guides/rest-api/object-definitions/).
                 */
                fields?: MemberFields;
                token: string;
            };
            res: {
                /**
                 * Success
                 */
                200: Member;
            };
        };
    };
    '/tokens/{token}/webhooks': {
        get: {
            req: {
                token: string;
            };
            res: {
                /**
                 * Success
                 */
                200: Array<Webhook>;
            };
        };
        post: {
            req: {
                /**
                 * The URL that the webhook should POST information to.
                 */
                callbackUrl: string;
                /**
                 * A description to be displayed when retrieving information about the webhook.
                 */
                description?: string;
                /**
                 * ID of the object to create a webhook on.
                 */
                idModel: TrelloID;
                token: string;
            };
            res: {
                /**
                 * Success
                 */
                200: Webhook;
            };
        };
    };
    '/tokens/{token}/webhooks/{idWebhook}': {
        get: {
            req: {
                /**
                 * ID of the [Webhooks](ref:webhooks) to retrieve.
                 */
                idWebhook: TrelloID;
                token: string;
            };
            res: {
                /**
                 * Success
                 */
                200: Webhook;
            };
        };
        delete: {
            req: {
                /**
                 * ID of the [Webhooks](ref:webhooks) to retrieve.
                 */
                idWebhook: TrelloID;
                token: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
        put: {
            req: {
                /**
                 * The URL that the webhook should `POST` information to.
                 */
                callbackUrl?: string;
                /**
                 * A description to be displayed when retrieving information about the webhook.
                 */
                description?: string;
                /**
                 * ID of the object that the webhook is on.
                 */
                idModel?: TrelloID;
                /**
                 * ID of the [Webhooks](ref:webhooks) to retrieve.
                 */
                idWebhook: TrelloID;
                token: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/tokens/{token}/': {
        delete: {
            req: {
                token: string;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/webhooks/': {
        post: {
            req: {
                /**
                 * Determines whether the webhook is active and sending `POST` requests.
                 */
                active?: boolean;
                /**
                 * A valid URL that is reachable with a `HEAD` and `POST` request.
                 */
                callbackUrl: string;
                /**
                 * A string with a length from `0` to `16384`.
                 */
                description?: string;
                /**
                 * ID of the model to be monitored
                 */
                idModel: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Webhook;
            };
        };
    };
    '/webhooks/{id}': {
        get: {
            req: {
                /**
                 * ID of the webhook to retrieve.
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Webhook;
            };
        };
        put: {
            req: {
                /**
                 * Determines whether the webhook is active and sending `POST` requests.
                 */
                active?: boolean;
                /**
                 * A valid URL that is reachable with a `HEAD` and `POST` request.
                 */
                callbackUrl?: string;
                /**
                 * A string with a length from `0` to `16384`.
                 */
                description?: string;
                /**
                 * ID of the webhook to retrieve.
                 */
                id: TrelloID;
                /**
                 * ID of the model to be monitored
                 */
                idModel?: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: Webhook;
            };
        };
        delete: {
            req: {
                /**
                 * ID of the webhook to retrieve.
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
    '/webhooks/{id}/{field}': {
        get: {
            req: {
                /**
                 * Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel`
                 */
                field: 'active' | 'callbackURL' | 'description' | 'idModel' | 'consecutiveFailures' | 'firstConsecutiveFailDate';
                /**
                 * ID of the webhook.
                 */
                id: TrelloID;
            };
            res: {
                /**
                 * Success
                 */
                200: unknown;
            };
        };
    };
};
