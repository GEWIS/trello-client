export declare const $Action: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly $ref: "#/components/schemas/TrelloID";
        };
        readonly idMemberCreator: {
            readonly type: "string";
            readonly $ref: "#/components/schemas/TrelloID";
        };
        readonly data: {
            readonly type: "object";
            readonly properties: {
                readonly text: {
                    readonly type: "string";
                    readonly example: "Can never go wrong with bowie";
                };
                readonly card: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly $ref: "#/components/schemas/TrelloID";
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly example: "Bowie";
                        };
                        readonly idShort: {
                            readonly type: "integer";
                            readonly example: 7;
                        };
                        readonly shortLink: {
                            readonly type: "string";
                            readonly example: "3CsPkqOF";
                        };
                    };
                };
                readonly board: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly $ref: "#/components/schemas/TrelloID";
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly example: "Mullets";
                        };
                        readonly shortLink: {
                            readonly type: "string";
                            readonly example: "3CsPkqOF";
                        };
                    };
                };
                readonly list: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly $ref: "#/components/schemas/TrelloID";
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly example: "Amazing";
                        };
                    };
                };
            };
        };
        readonly type: {
            readonly type: "string";
            readonly example: "commentCard";
        };
        readonly date: {
            readonly type: "string";
            readonly format: "date-time";
            readonly example: "2020-03-09T19:41:51.396Z";
        };
        readonly limits: {
            readonly type: "object";
            readonly properties: {
                readonly reactions: {
                    readonly type: "object";
                    readonly properties: {
                        readonly perAction: {
                            readonly type: "object";
                            readonly properties: {
                                readonly status: {
                                    readonly type: "string";
                                    readonly example: "ok";
                                };
                                readonly disableAt: {
                                    readonly type: "number";
                                    readonly example: 1000;
                                };
                                readonly warnAt: {
                                    readonly type: "number";
                                    readonly example: 900;
                                };
                            };
                        };
                        readonly uniquePerAction: {
                            readonly type: "object";
                            readonly properties: {
                                readonly status: {
                                    readonly type: "string";
                                    readonly example: "ok";
                                };
                                readonly disableAt: {
                                    readonly type: "number";
                                    readonly example: 1000;
                                };
                                readonly warnAt: {
                                    readonly type: "number";
                                    readonly example: 900;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly display: {
            readonly type: "object";
            readonly properties: {
                readonly translationKey: {
                    readonly type: "string";
                    readonly example: "action_comment_on_card";
                };
                readonly entities: {
                    readonly type: "object";
                    readonly properties: {
                        readonly contextOn: {
                            readonly type: "object";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly example: "translatable";
                                };
                                readonly translationKey: {
                                    readonly type: "string";
                                    readonly example: "action_on";
                                };
                                readonly hideIfContext: {
                                    readonly type: "boolean";
                                };
                                readonly idContext: {
                                    readonly type: "string";
                                    readonly $ref: "#/components/schemas/TrelloID";
                                };
                            };
                        };
                        readonly card: {
                            readonly type: "object";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly example: "card";
                                };
                                readonly hideIfContext: {
                                    readonly type: "boolean";
                                };
                                readonly id: {
                                    readonly type: "string";
                                    readonly $ref: "#/components/schemas/TrelloID";
                                };
                                readonly shortLink: {
                                    readonly type: "string";
                                    readonly example: "3CsPkqOF";
                                };
                                readonly text: {
                                    readonly type: "string";
                                    readonly example: "Bowie";
                                };
                            };
                        };
                        readonly comment: {
                            readonly type: "object";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly example: "comment";
                                };
                                readonly text: {
                                    readonly type: "string";
                                    readonly example: "Can never go wrong with bowie";
                                };
                            };
                        };
                        readonly memberCreator: {
                            readonly type: "object";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly example: "member";
                                };
                                readonly id: {
                                    readonly $ref: "#/components/schemas/TrelloID";
                                };
                                readonly username: {
                                    readonly type: "string";
                                    readonly example: "bobloblaw";
                                };
                                readonly text: {
                                    readonly type: "string";
                                    readonly example: "Bob Loblaw (World)";
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly memberCreator: {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $ref: "#/components/schemas/TrelloID";
                    readonly example: "5b02e7f4e1facdc393169f9d";
                };
                readonly activityBlocked: {
                    readonly type: "boolean";
                    readonly example: false;
                };
                readonly avatarHash: {
                    readonly type: "string";
                    readonly example: "db2adf80c2e6c26b76e1f10400eb4c45";
                };
                readonly avatarUrl: {
                    readonly type: "string";
                    readonly format: "url";
                    readonly example: "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45";
                };
                readonly fullName: {
                    readonly type: "string";
                    readonly example: "Bob Loblaw (Trello)";
                };
                readonly idMemberReferrer: {
                    readonly type: "string";
                    readonly $ref: "#/components/schemas/TrelloID";
                    readonly nullable: true;
                    readonly example: any;
                };
                readonly initials: {
                    readonly type: "string";
                    readonly example: "BL";
                };
                readonly username: {
                    readonly type: "string";
                    readonly example: "bobloblaw";
                };
            };
        };
    };
};

export declare const $ActionFields: {
    readonly type: "string";
    readonly enum: readonly ["id", "idMemberCreator", "data", "type", "date", "limits", "display", "memberCreator"];
};

export declare const $APIKey: {
    readonly type: "string";
    readonly pattern: "^[0-9a-fA-F]{32}$";
    readonly example: "0471642aefef5fa1fa76530ce1ba4c85";
};

export declare const $APIToken: {
    readonly type: "string";
    readonly example: "9eb76d9a9d02b8dd40c2f3e5df18556c831d4d1fadbe2c45f8310e6c93b5c548";
};

export declare const $Attachment: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5bc79d4206526d2279c1e6ea";
        };
        readonly bytes: {
            readonly type: "string";
            readonly example: any;
            readonly nullable: true;
        };
        readonly date: {
            readonly type: "string";
            readonly format: "date";
            readonly example: "2018-10-17T19:10:14.808Z";
        };
        readonly edgeColor: {
            readonly type: "string";
            readonly $ref: "#/components/schemas/Color";
            readonly example: any;
            readonly nullable: true;
        };
        readonly idMember: {
            readonly type: "string";
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5bc79d4206526d2279c1e6eb";
        };
        readonly isUpload: {
            readonly type: "boolean";
            readonly example: false;
        };
        readonly mimeType: {
            readonly type: "string";
            readonly example: "";
        };
        readonly name: {
            readonly type: "string";
            readonly example: "Deprecation Extension Notice";
        };
        readonly previews: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly example: readonly [];
        };
        readonly url: {
            readonly type: "string";
            readonly format: "url";
            readonly example: "https://admin.typeform.com/form/RzExEM/share#/link";
        };
        readonly pos: {
            readonly type: "number";
            readonly format: "float";
            readonly example: 1638;
        };
    };
};

export declare const $AttachmentFields: {
    readonly type: "string";
    readonly enum: readonly ["id", "bytes", "date", "edgeColor", "idMember", "isUpload", "mimeType", "name", "previews", "url", "pos"];
};

export declare const $BlockedKey: {
    readonly type: "string";
    readonly enum: readonly ["notification_comment_card", "notification_added_a_due_date", "notification_changed_due_date", "notification_card_due_soon", "notification_removed_from_card", "notification_added_attachment_to_card", "notification_created_card", "notification_moved_card", "notification_archived_card", "notification_unarchived_card"];
    readonly example: "notification_comment_card";
};

export declare const $Board: {
    readonly type: "object";
    readonly required: readonly ["id"];
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
        };
        readonly name: {
            readonly type: "string";
            readonly description: "The name of the board.";
            readonly example: "Trello Platform Changes";
        };
        readonly desc: {
            readonly type: "string";
            readonly example: "Track changes to Trello's Platform on this board.";
        };
        readonly descData: {
            readonly type: "string";
        };
        readonly closed: {
            readonly type: "boolean";
            readonly example: false;
        };
        readonly idMemberCreator: {
            readonly $ref: "#/components/schemas/TrelloID";
        };
        readonly idOrganization: {
            readonly $ref: "#/components/schemas/TrelloID";
        };
        readonly pinned: {
            readonly type: "boolean";
            readonly example: false;
        };
        readonly url: {
            readonly type: "string";
            readonly format: "url";
            readonly example: "https://trello.com/b/dQHqCohZ/trello-platform-changelog";
        };
        readonly shortUrl: {
            readonly type: "string";
            readonly format: "url";
            readonly example: "https://trello.com/b/dQHqCohZ";
        };
        readonly prefs: {
            readonly $ref: "#/components/schemas/Prefs";
        };
        readonly labelNames: {
            readonly type: "object";
            readonly properties: {
                readonly green: {
                    readonly type: "string";
                    readonly example: "Addition";
                };
                readonly yellow: {
                    readonly type: "string";
                    readonly example: "Update";
                };
                readonly orange: {
                    readonly type: "string";
                    readonly example: "Deprecation";
                };
                readonly red: {
                    readonly type: "string";
                    readonly example: "Deletion";
                };
                readonly purple: {
                    readonly type: "string";
                    readonly example: "Power-Ups";
                };
                readonly blue: {
                    readonly type: "string";
                    readonly example: "News";
                };
                readonly sky: {
                    readonly type: "string";
                    readonly example: "Announcement";
                };
                readonly lime: {
                    readonly type: "string";
                    readonly example: "Delight";
                };
                readonly pink: {
                    readonly type: "string";
                    readonly example: "REST API";
                };
                readonly black: {
                    readonly type: "string";
                    readonly example: "Capabilties";
                };
            };
        };
        readonly limits: {
            readonly type: "object";
            readonly $ref: "#/components/schemas/Limits";
        };
        readonly starred: {
            readonly type: "boolean";
        };
        readonly memberships: {
            readonly type: "string";
        };
        readonly shortLink: {
            readonly type: "string";
        };
        readonly subscribed: {
            readonly type: "boolean";
        };
        readonly powerUps: {
            readonly type: "string";
        };
        readonly dateLastActivity: {
            readonly type: "string";
            readonly format: "date";
        };
        readonly dateLastView: {
            readonly type: "string";
            readonly format: "date";
        };
        readonly idTags: {
            readonly type: "string";
        };
        readonly datePluginDisable: {
            readonly type: "string";
            readonly format: "date";
            readonly nullable: true;
        };
        readonly creationMethod: {
            readonly type: "string";
            readonly nullable: true;
        };
        readonly ixUpdate: {
            readonly type: "integer";
        };
        readonly templateGallery: {
            readonly type: "string";
            readonly nullable: true;
        };
        readonly enterpriseOwned: {
            readonly type: "boolean";
        };
    };
};

export declare const $BoardBackground: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
        };
    };
};

export declare const $BoardFields: {
    readonly type: "string";
    readonly enum: readonly ["id", "name", "desc", "descData", "closed", "idMemberCreator", "idOrganization", "pinned", "url", "shortUrl", "prefs", "labelNames", "starred", "limits", "memberships", "enterpriseOwned"];
};

export declare const $BoardStars: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "585063850027165010be15a8";
        };
        readonly idBoard: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "57f7df684f1ca8c2877162e0";
        };
        readonly pos: {
            readonly type: "integer";
            readonly example: 32768;
        };
    };
};

export declare const $Card: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
        };
        readonly address: {
            readonly type: "string";
            readonly nullable: true;
        };
        readonly badges: {
            readonly type: "object";
            readonly properties: {
                readonly attachmentsByType: {
                    readonly type: "object";
                    readonly properties: {
                        readonly trello: {
                            readonly type: "object";
                            readonly properties: {
                                readonly board: {
                                    readonly type: "number";
                                };
                                readonly card: {
                                    readonly type: "number";
                                };
                            };
                        };
                    };
                };
                readonly location: {
                    readonly type: "boolean";
                };
                readonly votes: {
                    readonly type: "integer";
                };
                readonly viewingMemberVoted: {
                    readonly type: "boolean";
                    readonly example: false;
                };
                readonly subscribed: {
                    readonly type: "boolean";
                    readonly example: false;
                };
                readonly fogbugz: {
                    readonly type: "string";
                };
                readonly checkItems: {
                    readonly type: "integer";
                    readonly example: 0;
                };
                readonly checkItemsChecked: {
                    readonly type: "integer";
                    readonly example: 0;
                };
                readonly comments: {
                    readonly type: "integer";
                    readonly example: 0;
                };
                readonly attachments: {
                    readonly type: "integer";
                    readonly example: 0;
                };
                readonly description: {
                    readonly type: "boolean";
                };
                readonly due: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly nullable: true;
                };
                readonly start: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly nullable: true;
                };
                readonly dueComplete: {
                    readonly type: "boolean";
                };
            };
        };
        readonly checkItemStates: {
            readonly type: "array";
            readonly items: {
                readonly oneOf: readonly [{
                    readonly type: "string";
                }];
            };
        };
        readonly closed: {
            readonly type: "boolean";
        };
        readonly coordinates: {
            readonly type: "string";
            readonly nullable: true;
        };
        readonly creationMethod: {
            readonly type: "string";
            readonly nullable: true;
        };
        readonly dateLastActivity: {
            readonly type: "string";
            readonly format: "date-time";
            readonly example: "2019-09-16T16:19:17.156Z";
        };
        readonly desc: {
            readonly type: "string";
            readonly example: "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.";
        };
        readonly descData: {
            readonly type: "object";
            readonly properties: {
                readonly emoji: {
                    readonly type: "object";
                };
            };
        };
        readonly due: {
            readonly type: "string";
            readonly format: "date";
            readonly nullable: true;
        };
        readonly dueReminder: {
            readonly type: "string";
            readonly nullable: true;
        };
        readonly idBoard: {
            readonly type: "string";
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5abbe4b7ddc1b351ef961414";
        };
        readonly idChecklists: {
            readonly type: "array";
            readonly items: {
                readonly oneOf: readonly [{
                    readonly $ref: "#/components/schemas/Checklist";
                }, {
                    readonly $ref: "#/components/schemas/TrelloID";
                }];
            };
        };
        readonly idLabels: {
            readonly type: "array";
            readonly items: {
                readonly oneOf: readonly [{
                    readonly $ref: "#/components/schemas/Label";
                }, {
                    readonly $ref: "#/components/schemas/TrelloID";
                }];
            };
        };
        readonly idList: {
            readonly type: "string";
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5abbe4b7ddc1b351ef961415";
        };
        readonly idMembers: {
            readonly type: "array";
            readonly items: {
                readonly oneOf: readonly [{
                    readonly $ref: "#/components/schemas/TrelloID";
                }];
            };
        };
        readonly idMembersVoted: {
            readonly type: "array";
            readonly items: {
                readonly oneOf: readonly [{
                    readonly $ref: "#/components/schemas/TrelloID";
                }];
            };
        };
        readonly idShort: {
            readonly type: "integer";
        };
        readonly idAttachmentCover: {
            readonly type: "string";
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5abbe4b7ddc1b351ef961415";
            readonly nullable: true;
        };
        readonly labels: {
            readonly type: "array";
            readonly items: {
                readonly oneOf: readonly [{
                    readonly $ref: "#/components/schemas/TrelloID";
                }];
            };
        };
        readonly limits: {
            readonly type: "object";
            readonly $ref: "#/components/schemas/Limits";
        };
        readonly locationName: {
            readonly type: "string";
            readonly nullable: true;
        };
        readonly manualCoverAttachment: {
            readonly type: "boolean";
            readonly example: false;
        };
        readonly name: {
            readonly type: "string";
            readonly example: "👋 What? Why? How?";
        };
        readonly pos: {
            readonly type: "number";
            readonly format: "float";
            readonly example: 65535;
        };
        readonly shortLink: {
            readonly type: "string";
            readonly example: "H0TZyzbK";
        };
        readonly shortUrl: {
            readonly type: "string";
            readonly format: "url";
            readonly example: "https://trello.com/c/H0TZyzbK";
        };
        readonly subscribed: {
            readonly type: "boolean";
            readonly example: false;
        };
        readonly url: {
            readonly type: "string";
            readonly format: "url";
            readonly example: "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how";
        };
        readonly cover: {
            readonly type: "object";
            readonly properties: {
                readonly idAttachment: {
                    readonly type: "string";
                    readonly $ref: "#/components/schemas/TrelloID";
                    readonly nullable: true;
                };
                readonly color: {
                    readonly $ref: "#/components/schemas/Color";
                    readonly nullable: true;
                };
                readonly idUploadedBackground: {
                    readonly type: "boolean";
                    readonly nullable: true;
                };
                readonly size: {
                    readonly type: "string";
                    readonly enum: readonly ["normal"];
                };
                readonly brightness: {
                    readonly type: "string";
                    readonly enum: readonly ["light", "dark"];
                };
                readonly isTemplate: {
                    readonly type: "boolean";
                    readonly example: false;
                };
            };
        };
    };
};

export declare const $CardAging: {
    readonly type: "string";
    readonly enum: readonly ["pirate", "regular"];
};

export declare const $CardFields: {
    readonly type: "string";
    readonly enum: readonly ["id", "address", "badges", "checkItemStates", "closed", "coordinates", "creationMethod", "dueComplete", "dateLastActivity", "desc", "descData", "due", "dueReminder", "idBoard", "idChecklists", "idLabels", "idList", "idMembers", "idMembersVoted", "idShort", "idAttachmentCover", "labels", "limits", "locationName", "manualCoverAttachment", "name", "pos", "shortLink", "shortUrl", "subscribed", "url", "cover", "isTemplate"];
    readonly description: "The fields on a Card.";
};

export declare const $CFValue: {
    readonly type: "object";
    readonly properties: {
        readonly number: {
            readonly type: "string";
        };
    };
};

export declare const $Channel: {
    readonly type: "string";
    readonly enum: readonly ["email"];
    readonly example: "email";
};

export declare const $CheckItem: {
    readonly type: "object";
    readonly properties: {
        readonly idChecklist: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5dc9b507756e182c76007621";
        };
        readonly state: {
            readonly type: "string";
            readonly enum: readonly ["complete", "incomplete"];
            readonly example: "incomplete";
        };
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5dc9b509f02f4314edc4303a";
        };
        readonly name: {
            readonly type: "string";
        };
        readonly nameData: {
            readonly type: "string";
            readonly nullable: true;
            readonly example: any;
        };
        readonly pos: {
            readonly type: "string";
            readonly example: 1673;
        };
    };
};

export declare const $Checklist: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
        };
    };
};

export declare const $ClaimableOrganizations: {
    readonly type: "object";
    readonly properties: {
        readonly organizations: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly example: "organization_name";
                    };
                    readonly displayName: {
                        readonly type: "string";
                        readonly example: "Organization Name";
                    };
                    readonly activeMembershipCount: {
                        readonly type: "number";
                        readonly example: 5;
                    };
                    readonly idActiveAdmins: {
                        readonly type: "array";
                        readonly items: {
                            readonly $ref: "#/components/schemas/TrelloID";
                        };
                    };
                    readonly products: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "number";
                            readonly format: "integer";
                        };
                    };
                    readonly id: {
                        readonly type: "string";
                        readonly $ref: "#/components/schemas/TrelloID";
                        readonly example: "617abd5995eae45169a11059";
                    };
                    readonly logoUrl: {
                        readonly type: "string";
                        readonly nullable: true;
                        readonly example: any;
                    };
                    readonly dateLastActive: {
                        readonly type: "string";
                        readonly nullable: true;
                        readonly example: "2019-08-22T18:15:53.546Z";
                        readonly format: "date";
                        readonly description: "The date of the most recent activity on any of the boards in the workspace. If the workspace has no boards, or the boards have no activity, this value will be null.";
                    };
                };
            };
        };
        readonly claimableCount: {
            readonly type: "number";
            readonly example: 2;
        };
    };
};

export declare const $Color: {
    readonly type: "string";
    readonly enum: readonly ["yellow", "purple", "blue", "red", "green", "orange", "black", "sky", "pink", "lime"];
    readonly nullable: true;
};

export declare const $CustomEmoji: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5900ac11ed55d6d2c355c5d6";
        };
        readonly url: {
            readonly type: "string";
            readonly format: "url";
            readonly example: "https://trello-emoji.s3.amazonaws.com/5589c3ea49b40cedc28cf70e/b40d9925f4e75495104b5e560881d8e4/chorizo.png";
        };
        readonly name: {
            readonly type: "string";
            readonly example: "chorizo";
        };
    };
};

export declare const $CustomField: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5ab10be237846c43015f108e";
        };
        readonly idModel: {
            readonly type: "string";
            readonly example: "586e8f681d4fe9b06a928307";
        };
        readonly modelType: {
            readonly type: "string";
            readonly enum: readonly ["card", "board", "member"];
            readonly example: "board";
        };
        readonly fieldGroup: {
            readonly type: "string";
            readonly example: "f6177ba6839d6fff0f73922c1cea105e793fda8a1433d466104dacc0b7c56955";
        };
        readonly display: {
            readonly type: "object";
            readonly properties: {
                readonly cardFront: {
                    readonly type: "boolean";
                    readonly example: true;
                };
                readonly name: {
                    readonly type: "string";
                    readonly example: "Priority 🏔";
                };
                readonly pos: {
                    readonly type: "string";
                    readonly example: "98304,";
                };
                readonly options: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly $ref: "#/components/schemas/TrelloID";
                                readonly example: "5ab10be237846c43015f1091";
                            };
                            readonly idCustomField: {
                                readonly $ref: "#/components/schemas/TrelloID";
                                readonly example: "5ab10be237846c43015f108e";
                            };
                            readonly value: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly text: {
                                        readonly type: "string";
                                        readonly example: "High";
                                    };
                                };
                            };
                            readonly color: {
                                readonly type: "string";
                                readonly example: "red";
                            };
                            readonly pos: {
                                readonly type: "number";
                                readonly example: 16384;
                            };
                        };
                    };
                };
            };
        };
        readonly type: {
            readonly type: "string";
            readonly example: "list";
        };
    };
};

export declare const $CustomFieldItems: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
        };
        readonly value: {
            readonly type: "object";
            readonly properties: {
                readonly checked: {
                    readonly type: "string";
                    readonly example: "true";
                };
            };
        };
        readonly idCustomField: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5b080fd8017bd1653b5480fa";
        };
        readonly idModel: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5b080ff194611b41aaaa9570";
        };
        readonly modelType: {
            readonly type: "string";
            readonly enum: readonly ["card", "board", "member"];
            readonly example: "card";
        };
    };
};

export declare const $customFieldItemValue: {
    readonly type: "object";
    readonly properties: {
        readonly value: {
            readonly type: "object";
        };
    };
};

export declare const $CustomSticker: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
        };
        readonly url: {
            readonly type: "string";
            readonly format: "url";
        };
        readonly scaled: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly $ref: "#/components/schemas/TrelloID";
                    };
                };
            };
        };
    };
};

export declare const $Emoji: {
    readonly type: "object";
    readonly properties: {
        readonly trello: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly unified: {
                        readonly type: "string";
                        readonly example: "1F600";
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly example: "GRINNING FACE";
                    };
                    readonly native: {
                        readonly type: "string";
                        readonly example: "😀";
                    };
                    readonly shortName: {
                        readonly type: "string";
                        readonly example: "grinning";
                    };
                    readonly shortNames: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly example: "grinning\"";
                        };
                    };
                    readonly text: {
                        readonly type: "string";
                        readonly example: ":)";
                    };
                    readonly texts: {
                        readonly type: "string";
                        readonly nullable: true;
                        readonly example: any;
                    };
                    readonly category: {
                        readonly type: "string";
                        readonly example: "Smileys & People";
                    };
                    readonly sheetX: {
                        readonly type: "number";
                        readonly example: 30;
                    };
                    readonly sheetY: {
                        readonly type: "number";
                        readonly example: 24;
                    };
                    readonly tts: {
                        readonly type: "string";
                        readonly example: "grinning face";
                    };
                    readonly keywords: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly example: "face";
                        };
                    };
                };
            };
        };
    };
};

export declare const $Enterprise: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "59c15d19566e197b23665901";
        };
        readonly name: {
            readonly type: "string";
            readonly example: "bentley_test";
        };
        readonly displayName: {
            readonly type: "string";
            readonly example: "Bentley's Test Enterprise!";
        };
        readonly logoHash: {
            readonly type: "string";
            readonly nullable: true;
            readonly example: any;
        };
        readonly logoUrl: {
            readonly type: "string";
            readonly nullable: true;
            readonly example: any;
        };
        readonly prefs: {
            readonly type: "object";
            readonly properties: {
                readonly ssoOnly: {
                    readonly type: "boolean";
                    readonly example: false;
                };
                readonly signup: {
                    readonly type: "object";
                    readonly properties: {
                        readonly banner: {
                            readonly type: "string";
                        };
                        readonly bannerHtml: {
                            readonly type: "string";
                            readonly example: "<p>Hello</p>\n";
                        };
                    };
                };
                readonly mandatoryTransferDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly nullable: true;
                    readonly example: any;
                };
                readonly brandingColor: {
                    readonly type: "string";
                };
                readonly autoJoinOrganizations: {
                    readonly type: "boolean";
                    readonly example: false;
                };
                readonly notifications: {
                    readonly type: "object";
                };
                readonly maxMembers: {
                    readonly type: "number";
                    readonly nullable: true;
                    readonly example: any;
                };
            };
        };
        readonly organizationPrefs: {
            readonly type: "object";
            readonly properties: {
                readonly boardVisibilityRestrict: {
                    readonly type: "object";
                };
                readonly boardDeleteRestrict: {
                    readonly type: "object";
                };
                readonly attachmentRestrictions: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["computer", "trello", "google-drive", "box", "onedrive", "link"];
                    };
                };
            };
        };
        readonly ssoActivationFailed: {
            readonly type: "boolean";
        };
        readonly idAdmins: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/TrelloID";
            };
        };
        readonly enterpriseDomains: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
                readonly format: "url";
            };
        };
        readonly isRealEnterprise: {
            readonly type: "boolean";
            readonly example: true;
        };
        readonly pluginWhitelistingEnabled: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/TrelloID";
            };
        };
        readonly idOrganizations: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/TrelloID";
            };
        };
        readonly products: {
            readonly type: "array";
            readonly items: {
                readonly type: "number";
                readonly format: "integer";
            };
        };
        readonly licenses: {
            readonly type: "object";
            readonly properties: {
                readonly maxMembers: {
                    readonly type: "number";
                    readonly nullable: true;
                    readonly format: "integer";
                    readonly example: any;
                };
                readonly totalMembers: {
                    readonly type: "number";
                    readonly format: "integer";
                    readonly example: 5;
                };
                readonly relatedEnterprises: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly example: "enterprise_name";
                            };
                            readonly displayName: {
                                readonly type: "string";
                                readonly example: "My Test Enterprise!";
                            };
                            readonly count: {
                                readonly type: "number";
                                readonly example: 5;
                                readonly format: "integer";
                            };
                        };
                    };
                };
            };
        };
        readonly domains: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
                readonly format: "url";
            };
        };
        readonly dateOrganizationPrefsLastUpdated: {
            readonly type: "string";
            readonly example: "2019-08-22T18:15:53.546Z";
            readonly format: "date";
        };
        readonly idp: {
            readonly type: "object";
            readonly properties: {
                readonly requestSigned: {
                    readonly type: "boolean";
                    readonly example: false;
                };
                readonly certificate: {
                    readonly type: "string";
                    readonly nullable: true;
                    readonly example: any;
                };
                readonly loginUrl: {
                    readonly type: "string";
                    readonly format: "url";
                    readonly nullable: true;
                    readonly example: any;
                };
            };
        };
    };
};

export declare const $EnterpriseAdmin: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5dced8665015383ed5ca248c";
        };
        readonly fullName: {
            readonly type: "string";
            readonly example: "Bob Loblaw";
        };
        readonly username: {
            readonly type: "string";
            readonly example: "bobloblaw";
        };
    };
};

export declare const $EnterpriseAuditLog: {
    readonly type: "object";
    readonly properties: {
        readonly idAction: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5dced8665015383ed5ca248c";
        };
        readonly type: {
            readonly type: "string";
            readonly example: "addOrganizationToEnterprise";
        };
        readonly date: {
            readonly type: "string";
            readonly format: "date";
            readonly example: "2018-04-26T17:03:25.155Z";
        };
        readonly memberCreator: {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly $ref: "#/components/schemas/TrelloID";
                    readonly example: "5bc79d4206526d2279c1e6ea";
                };
                readonly username: {
                    readonly type: "string";
                    readonly example: "bobloblaw";
                };
                readonly fullName: {
                    readonly type: "string";
                    readonly example: "Bob Loblaw (Trello)";
                };
            };
        };
        readonly organization: {
            readonly type: "object";
            readonly properties: {
                readonly enterpriseJoinRequest: {
                    readonly type: "object";
                    readonly nullable: true;
                    readonly properties: {
                        readonly idEnterprise: {
                            readonly $ref: "#/components/schemas/TrelloID";
                            readonly example: "617ac9070293e6612650e0ca";
                        };
                        readonly idMember: {
                            readonly $ref: "#/components/schemas/TrelloID";
                            readonly example: "5bc79d4206526d2279c1e6ea";
                        };
                        readonly date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly example: "2018-04-26T17:03:25.155Z";
                        };
                    };
                };
                readonly id: {
                    readonly $ref: "#/components/schemas/TrelloID";
                    readonly example: "617ac9070293e6612650e0ca";
                };
                readonly name: {
                    readonly type: "string";
                    readonly example: "organization name";
                };
            };
        };
        readonly member: {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly $ref: "#/components/schemas/TrelloID";
                    readonly example: "5bc79d4206526d2279c1e6ea";
                };
                readonly username: {
                    readonly type: "string";
                    readonly example: "bentleycook";
                };
                readonly fullName: {
                    readonly type: "string";
                    readonly example: "Bentley Cook";
                };
            };
        };
    };
};

export declare const $Error: {
    readonly type: "object";
    readonly properties: {
        readonly code: {
            readonly type: "string";
        };
        readonly message: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["code", "message"];
};

export declare const $Export: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5dced8665015383ed5ca248c";
        };
        readonly status: {
            readonly type: "object";
            readonly properties: {
                readonly attempts: {
                    readonly type: "number";
                    readonly example: 0;
                };
                readonly finished: {
                    readonly type: "boolean";
                    readonly example: false;
                };
                readonly stage: {
                    readonly type: "string";
                    readonly example: "Export_queued";
                };
            };
        };
        readonly startedAt: {
            readonly type: "string";
            readonly format: "date-time";
            readonly example: "2019-11-15T16:55:02.000Z";
        };
        readonly size: {
            readonly type: "string";
            readonly nullable: true;
            readonly example: any;
        };
        readonly exportUrl: {
            readonly type: "string";
            readonly nullable: true;
            readonly example: any;
        };
    };
};

export declare const $ImageDescriptor: {
    readonly type: "object";
    readonly properties: {
        readonly width: {
            readonly description: "The width of the image.";
            readonly type: "integer";
            readonly example: 100;
        };
        readonly height: {
            readonly description: "The height of the image.";
            readonly type: "integer";
            readonly example: 64;
        };
        readonly url: {
            readonly description: "The URL of the image.";
            readonly format: "url";
            readonly type: "string";
            readonly example: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg";
        };
    };
};

export declare const $Label: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly description: "The ID of the label.";
            readonly type: "string";
            readonly $ref: "#/components/schemas/TrelloID";
        };
        readonly idBoard: {
            readonly type: "string";
            readonly description: "The ID of the board the label is on.";
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5abbe4b7ddc1b351ef961414";
        };
        readonly name: {
            readonly type: "string";
            readonly description: "The name displayed for the label.";
            readonly example: "Overdue";
            readonly nullable: true;
            readonly minLength: 0;
            readonly maxLength: 16384;
        };
        readonly color: {
            readonly type: "string";
            readonly $ref: "#/components/schemas/Color";
            readonly description: "The color of the label. Null means no color and the label will not be shown on the front of Cards.";
        };
    };
};

export declare const $Limits: {
    readonly type: "object";
    readonly properties: {
        readonly attachments: {
            readonly type: "object";
            readonly properties: {
                readonly perBoard: {
                    readonly type: "object";
                    readonly $ref: "#/components/schemas/LimitsObject";
                };
            };
        };
    };
};

export declare const $LimitsObject: {
    readonly type: "object";
    readonly properties: {
        readonly status: {
            readonly type: "string";
            readonly enum: readonly ["ok", "warning"];
        };
        readonly disableAt: {
            readonly type: "number";
            readonly example: 36000;
        };
        readonly warnAt: {
            readonly type: "number";
            readonly example: 32400;
        };
    };
};

export declare const $ListFields: {
    readonly type: "string";
    readonly enum: readonly ["id"];
};

export declare const $Member: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
        };
        readonly activityBlocked: {
            readonly type: "boolean";
            readonly example: false;
        };
        readonly avatarHash: {
            readonly type: "string";
            readonly example: "fc8faaaee46666a4eb8b626c08933e16";
        };
        readonly avatarUrl: {
            readonly type: "string";
            readonly format: "url";
            readonly example: "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16";
        };
        readonly bio: {
            readonly type: "string";
            readonly example: "👋 I'm a developer advocate at Trello!";
        };
        readonly bioData: {
            readonly type: "object";
            readonly properties: {
                readonly emoji: {
                    readonly type: "object";
                };
            };
        };
        readonly confirmed: {
            readonly type: "boolean";
            readonly example: true;
        };
        readonly fullName: {
            readonly type: "string";
            readonly example: "Bentley Cook";
        };
        readonly idEnterprise: {
            readonly type: "string";
            readonly $ref: "#/components/schemas/TrelloID";
        };
        readonly idEnterprisesDeactivated: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly idMemberReferrer: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly nullable: true;
            readonly example: any;
        };
        readonly idPremOrgsAdmin: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/TrelloID";
            };
        };
        readonly initials: {
            readonly type: "string";
            readonly example: "BC";
        };
        readonly memberType: {
            readonly type: "string";
            readonly enum: readonly ["normal", "ghost"];
            readonly example: "normal";
        };
        readonly nonPublic: {
            readonly type: "object";
            readonly description: "Profile data with restricted visibility. These fields are visible only to members of the\nsame organization. The values here (full name, for example) may differ from the values\nat the top level of the response.\n";
            readonly properties: {
                readonly fullName: {
                    readonly type: "string";
                    readonly example: "Bentley Cook";
                };
                readonly initials: {
                    readonly type: "string";
                    readonly example: "BC";
                };
                readonly avatarUrl: {
                    readonly type: "string";
                    readonly format: "url";
                    readonly example: "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45";
                    readonly description: "A URL that references the non-public avatar for the member";
                };
                readonly avatarHash: {
                    readonly type: "string";
                    readonly example: "db2adf80c2e6c26b76e1f10400eb4c45";
                };
            };
        };
        readonly nonPublicAvailable: {
            readonly type: "boolean";
            readonly example: false;
            readonly description: "Whether the response contains non-public profile data for the member";
        };
        readonly products: {
            readonly type: "array";
            readonly items: {
                readonly type: "integer";
            };
        };
        readonly url: {
            readonly type: "string";
            readonly format: "url";
            readonly example: "https://trello.com/bentleycook";
        };
        readonly username: {
            readonly type: "string";
            readonly example: "bentleycook";
        };
        readonly status: {
            readonly type: "string";
            readonly enum: readonly ["disconnected"];
            readonly example: "disconnected";
        };
        readonly aaEmail: {
            readonly type: "string";
            readonly format: "email";
            readonly nullable: true;
            readonly example: any;
        };
        readonly aaEnrolledDate: {
            readonly type: "string";
            readonly example: any;
            readonly nullable: true;
        };
        readonly aaId: {
            readonly type: "string";
            readonly example: any;
            readonly nullable: true;
        };
        readonly avatarSource: {
            readonly type: "string";
            readonly enum: readonly ["gravatar", "upload"];
            readonly example: "gravatar";
        };
        readonly email: {
            readonly type: "string";
            readonly example: "bcook@atlassian.com";
        };
        readonly gravatarHash: {
            readonly type: "string";
            readonly example: "0a1e804f6e35a65ae5e1f7ef4c92471c";
        };
        readonly idBoards: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/TrelloID";
            };
        };
        readonly idOrganizations: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/TrelloID";
            };
        };
        readonly idEnterprisesAdmin: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/TrelloID";
            };
        };
        readonly limits: {
            readonly $ref: "#/components/schemas/LimitsObject";
        };
        readonly loginTypes: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
                readonly enum: readonly ["password", "saml"];
                readonly example: "password";
            };
        };
        readonly marketingOptIn: {
            readonly type: "object";
            readonly properties: {
                readonly optedIn: {
                    readonly type: "boolean";
                    readonly example: false;
                };
                readonly date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly example: "2018-04-26T17:03:25.155Z";
                };
            };
        };
        readonly messagesDismissed: {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly example: "ad-security-features";
                };
                readonly count: {
                    readonly type: "string";
                    readonly example: 4;
                };
                readonly lastDismissed: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly example: "2019-03-11T20:19:46.809Z";
                };
                readonly _id: {
                    readonly $ref: "#/components/schemas/TrelloID";
                    readonly example: "5995d44573d197eada632a32";
                };
            };
        };
        readonly oneTimeMessagesDismissed: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly prefs: {
            readonly $ref: "#/components/schemas/MemberPrefs";
        };
        readonly trophies: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly uploadedAvatarHash: {
            readonly type: "string";
            readonly example: "dac3ad49ff117829dd63a79bb2ea3426";
        };
        readonly uploadedAvatarUrl: {
            readonly type: "string";
            readonly format: "url";
            readonly example: "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426";
        };
        readonly premiumFeatures: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly isAaMastered: {
            readonly type: "boolean";
            readonly example: false;
        };
        readonly ixUpdate: {
            readonly type: "number";
            readonly example: "48427";
        };
        readonly idBoardsPinned: {
            readonly type: "array";
            readonly nullable: true;
            readonly items: {
                readonly $ref: "#/components/schemas/TrelloID";
            };
        };
    };
};

export declare const $MemberFields: {
    readonly type: "string";
    readonly enum: readonly ["id"];
};

export declare const $MemberPrefs: {
    readonly type: "object";
    readonly properties: {
        readonly timezoneInfo: {
            readonly type: "object";
            readonly properties: {
                readonly offsetCurrent: {
                    readonly type: "integer";
                    readonly example: 360;
                };
                readonly timezoneCurrent: {
                    readonly type: "string";
                    readonly example: "CST";
                };
                readonly offsetNext: {
                    readonly type: "integer";
                    readonly example: 300;
                };
                readonly dateNext: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly example: "2020-03-08T08:00:00.000Z";
                };
                readonly timezoneNext: {
                    readonly type: "string";
                    readonly example: "CDT";
                };
            };
        };
        readonly privacy: {
            readonly type: "object";
            readonly properties: {
                readonly fullName: {
                    readonly type: "string";
                    readonly enum: readonly ["public", "private", "collaborator"];
                    readonly example: "public";
                };
                readonly avatar: {
                    readonly type: "string";
                    readonly enum: readonly ["public", "private", "collaborator"];
                    readonly example: "public";
                };
            };
        };
        readonly sendSummaries: {
            readonly type: "boolean";
            readonly example: true;
        };
        readonly minutesBetweenSummaries: {
            readonly type: "integer";
            readonly example: 60;
        };
        readonly minutesBeforeDeadlineToNotify: {
            readonly type: "integer";
            readonly example: 1440;
        };
        readonly colorBlind: {
            readonly type: "boolean";
            readonly example: true;
        };
        readonly locale: {
            readonly type: "string";
            readonly example: "en-AU";
        };
        readonly timezone: {
            readonly type: "string";
            readonly example: "America/Chicago";
        };
        readonly twoFactor: {
            readonly type: "object";
            readonly properties: {
                readonly enabled: {
                    readonly type: "boolean";
                    readonly example: true;
                };
                readonly needsNewBackups: {
                    readonly type: "boolean";
                    readonly example: false;
                };
            };
        };
    };
};

export declare const $Membership: {
    readonly type: "object";
    readonly properties: {
        readonly managed: {
            readonly type: "boolean";
        };
        readonly licensed: {
            readonly type: "boolean";
        };
        readonly admin: {
            readonly type: "boolean";
        };
        readonly deactivated: {
            readonly type: "boolean";
        };
        readonly collaborator: {
            readonly type: "boolean";
        };
        readonly member: {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly fullname: {
                    readonly type: "string";
                };
                readonly username: {
                    readonly type: "string";
                };
                readonly dateLastImpression: {
                    readonly type: "string";
                };
                readonly email: {
                    readonly type: "string";
                };
                readonly initials: {
                    readonly type: "string";
                };
                readonly avatarURL: {
                    readonly type: "string";
                };
                readonly memberType: {
                    readonly type: "string";
                };
                readonly confirmed: {
                    readonly type: "boolean";
                };
            };
            readonly example: {
                readonly id: "646e92a0a016198d3cf81e8a";
                readonly fullname: "Lex Math";
                readonly username: "amath";
                readonly dateLastImpression: "2023-05-24T22:41:36.406Z";
                readonly email: "amath@trello.com";
                readonly initials: "AM";
                readonly avatarURL: "trello.com/avatarURL";
                readonly memberType: "Admin";
                readonly confirmed: true;
            };
        };
    };
};

export declare const $Memberships: {
    readonly type: "object";
    readonly description: "";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
        };
    };
};

export declare const $Notification: {
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly example: "5dc591ac425f2a223aba0a8e";
        };
        readonly unread: {
            readonly type: "boolean";
            readonly example: true;
        };
        readonly type: {
            readonly type: "string";
            readonly enum: readonly ["cardDueSoon"];
            readonly example: "cardDueSoon";
        };
        readonly date: {
            readonly type: "string";
            readonly example: "2019-11-08T16:02:52.763Z";
        };
        readonly dateRead: {
            readonly type: "string";
            readonly example: any;
        };
        readonly data: {
            readonly type: "string";
            readonly example: any;
        };
        readonly card: {
            readonly type: "object";
            readonly $ref: "#/components/schemas/Card";
        };
        readonly board: {
            readonly type: "object";
            readonly $ref: "#/components/schemas/Board";
        };
        readonly idMemberCreator: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly nullable: true;
            readonly example: any;
        };
        readonly idAction: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly nullable: true;
            readonly example: any;
        };
        readonly reactions: {
            readonly type: "array";
            readonly example: readonly [];
        };
    };
};

export declare const $NotificationChannelSettings: {
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly example: "5dc591ac425f2a223aba0a8e";
        };
        readonly idMember: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5589c3ea49b40cedc28cf70e";
        };
        readonly blockedKeys: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/BlockedKey";
            };
        };
        readonly channel: {
            readonly $ref: "#/components/schemas/Channel";
        };
    };
};

export declare const $NotificationFields: {
    readonly type: "string";
    readonly enum: readonly ["id", "unread", "type", "date", "dateRead", "data", "card", "board", "idMemberCreator", "idAction", "reactions"];
};

export declare type $OpenApiTs = {
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
                200: Error_2;
                /**
                 * Unauthorized
                 */
                401: Error_2;
                /**
                 * The specified resource was not found
                 */
                404: Error_2;
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
                200: Array<Plugin_2>;
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
                200: Plugin_2;
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
                200: Error_2;
                /**
                 * Unauthorized
                 */
                401: Error_2;
                /**
                 * The specified resource was not found
                 */
                404: Error_2;
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
                200: Error_2;
                /**
                 * Unauthorized
                 */
                401: Error_2;
                /**
                 * The specified resource was not found
                 */
                404: Error_2;
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
                200: Error_2;
                /**
                 * Unauthorized
                 */
                401: Error_2;
                /**
                 * The specified resource was not found
                 */
                404: Error_2;
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
                200: Error_2;
                /**
                 * Unauthorized
                 */
                401: Error_2;
                /**
                 * The specified resource was not found
                 */
                404: Error_2;
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
                200: Error_2;
                /**
                 * Unauthorized
                 */
                401: Error_2;
                /**
                 * The specified resource was not found
                 */
                404: Error_2;
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
                200: Error_2;
                /**
                 * Unauthorized
                 */
                401: Error_2;
                /**
                 * The specified resource was not found
                 */
                404: Error_2;
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
                200: Error_2;
                /**
                 * Unauthorized
                 */
                401: Error_2;
                /**
                 * The specified resource was not found
                 */
                404: Error_2;
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
                200: Error_2;
                /**
                 * Unauthorized
                 */
                401: Error_2;
                /**
                 * The specified resource was not found
                 */
                404: Error_2;
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
                200: Error_2;
                /**
                 * Unauthorized
                 */
                401: Error_2;
                /**
                 * The specified resource was not found
                 */
                404: Error_2;
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
                200: Error_2;
                /**
                 * Unauthorized
                 */
                401: Error_2;
                /**
                 * The specified resource was not found
                 */
                404: Error_2;
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
                200: Array<Notification_2>;
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
                200: Notification_2;
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
                200: Notification_2;
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
                200: Notification_2;
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
                200: Notification_2;
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
                200: Notification_2;
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
                200: Plugin_2;
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
                200: Plugin_2;
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

export declare const $Organization: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
        };
    };
};

export declare const $OrganizationFields: {
    readonly type: "string";
    readonly enum: readonly ["id", "name"];
};

export declare const $PendingOrganizations: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "617ac9070293e6612650e0ca";
        };
        readonly idMember: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5589c3ea49b40cedc28cf70e";
        };
        readonly memberRequestor: {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $ref: "#/components/schemas/TrelloID";
                    readonly example: "59cd149051aa57a706962996";
                };
                readonly fullName: {
                    readonly type: "string";
                    readonly example: "Bob Loblaw (Trello)";
                };
            };
        };
        readonly date: {
            readonly type: "string";
            readonly format: "date";
            readonly example: "2018-10-17T19:10:14.808Z";
        };
        readonly displayName: {
            readonly type: "string";
            readonly example: "Organization Name";
        };
        readonly membershipCount: {
            readonly type: "number";
            readonly example: 2;
        };
        readonly logoUrl: {
            readonly type: "string";
            readonly nullable: true;
            readonly example: any;
        };
        readonly transferability: {
            readonly type: "object";
            readonly properties: {
                readonly transferrable: {
                    readonly type: "boolean";
                    readonly example: true;
                };
                readonly newBillableMembers: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly $ref: "#/components/schemas/TrelloID";
                                readonly example: "5ab10be237846c43015f1091";
                            };
                            readonly fullName: {
                                readonly type: "string";
                                readonly example: "Bob Loblaw";
                            };
                            readonly username: {
                                readonly type: "string";
                                readonly example: "bobloblaw";
                            };
                            readonly initials: {
                                readonly type: "string";
                                readonly example: "BL";
                            };
                            readonly avatarHash: {
                                readonly type: "string";
                                readonly example: "fc8faaaee46666a4eb8b626c08933e16";
                            };
                        };
                    };
                };
                readonly restrictedMembers: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly $ref: "#/components/schemas/TrelloID";
                                readonly example: "5ab10be237846c43015f1091";
                            };
                            readonly fullName: {
                                readonly type: "string";
                                readonly example: "Bob Loblaw";
                            };
                            readonly username: {
                                readonly type: "string";
                                readonly example: "bobloblaw";
                            };
                            readonly initials: {
                                readonly type: "string";
                                readonly example: "BL";
                            };
                            readonly avatarHash: {
                                readonly type: "string";
                                readonly example: "fc8faaaee46666a4eb8b626c08933e16";
                            };
                        };
                    };
                };
            };
        };
    };
};

export declare const $Plugin: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
        };
    };
};

export declare const $PluginData: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5c487f39294cab6ac1d6b305";
        };
        readonly idPlugin: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "55a5d915446f517774210003";
        };
        readonly scope: {
            readonly type: "string";
            readonly enum: readonly ["member", "board", "organization", "card"];
            readonly example: "organization";
        };
        readonly idModel: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "586e8d7b1af892b26d5b76b1";
        };
        readonly value: {
            readonly type: "string";
            readonly example: "{\"token\":\"S=s458:U=bda7cda:E=16fd2e21f55:C=1687b30f2c0:P=185:A=it-team-0604:V=2:H=3b0f3bac9c2a2af766202ebb9530a4a5\"}";
        };
        readonly access: {
            readonly type: "string";
            readonly enum: readonly ["private", "shared"];
            readonly example: "private";
        };
    };
};

export declare const $PluginListing: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5a7cd2f8f99c517f58da1579";
        };
        readonly name: {
            readonly type: "string";
            readonly example: "Attachment Section Example";
        };
        readonly locale: {
            readonly type: "string";
            readonly example: "en-US";
        };
        readonly description: {
            readonly type: "string";
            readonly example: "The [Glitch](https://glitch.com) Power-Up allows you to...";
        };
        readonly overview: {
            readonly type: "string";
            readonly example: "";
        };
    };
};

export declare const $posStringOrNumber: {
    readonly oneOf: readonly [{
        readonly type: "string";
        readonly enum: readonly ["top", "bottom"];
    }, {
        readonly type: "number";
        readonly format: "float";
        readonly example: 1293.5;
    }];
};

export declare const $Prefs: {
    readonly type: "object";
    readonly properties: {
        readonly permissionLevel: {
            readonly type: "string";
            readonly enum: readonly ["org", "board"];
        };
        readonly hideVotes: {
            readonly type: "boolean";
        };
        readonly voting: {
            readonly type: "string";
            readonly enum: readonly ["disabled", "enabled"];
        };
        readonly comments: {
            readonly type: "string";
        };
        readonly invitations: {
            readonly enum: readonly ["admins", "members"];
        };
        readonly selfJoin: {
            readonly type: "boolean";
        };
        readonly cardCovers: {
            readonly type: "boolean";
        };
        readonly isTemplate: {
            readonly type: "boolean";
        };
        readonly cardAging: {
            readonly $ref: "#/components/schemas/CardAging";
        };
        readonly calendarFeedEnabled: {
            readonly type: "boolean";
        };
        readonly background: {
            readonly $ref: "#/components/schemas/TrelloID";
        };
        readonly backgroundImage: {
            readonly type: "string";
            readonly format: "uri";
        };
        readonly backgroundImageScaled: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/ImageDescriptor";
            };
        };
        readonly backgroundTile: {
            readonly type: "boolean";
        };
        readonly backgroundBrightness: {
            readonly type: "string";
            readonly example: "dark";
        };
        readonly backgroundBottomColor: {
            readonly type: "string";
            readonly example: "#1e2e00";
        };
        readonly backgroundTopColor: {
            readonly type: "string";
            readonly example: "#ffffff";
        };
        readonly canBePublic: {
            readonly type: "boolean";
        };
        readonly canBeEnterprise: {
            readonly type: "boolean";
        };
        readonly canBeOrg: {
            readonly type: "boolean";
        };
        readonly canBePrivate: {
            readonly type: "boolean";
        };
        readonly canInvite: {
            readonly type: "boolean";
        };
    };
};

export declare const $SavedSearch: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5589b47349b40cedc28ceae2";
        };
        readonly name: {
            readonly type: "string";
            readonly example: "My Cards";
        };
        readonly query: {
            readonly type: "string";
            readonly example: "@me";
        };
        readonly pos: {
            readonly $ref: "#/components/schemas/posStringOrNumber";
            readonly example: 1638;
        };
    };
};

export declare const $Tag: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "58dd6dcaf8b86744d3cb4cde";
        };
        readonly name: {
            readonly type: "string";
            readonly example: "My Collection";
        };
    };
};

export declare const $Token: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5da728c55235b443c5b97181";
        };
        readonly identifier: {
            readonly type: "string";
            readonly example: "App Name";
        };
        readonly idMember: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "5589c3ea49b40cedc28cf70e";
        };
        readonly dateCreated: {
            readonly type: "string";
            readonly format: "date-time";
            readonly example: "2019-10-16T14:27:17.304Z";
        };
        readonly dateExpires: {
            readonly type: "string";
            readonly format: "date-time";
            readonly example: any;
            readonly nullable: true;
        };
        readonly permissions: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/components/schemas/TokenPermission";
            };
        };
    };
};

export declare const $TokenFields: {
    readonly type: "string";
    readonly enum: readonly ["identifier", "idMember", "dateCreated", "dateExpires", "permissions"];
};

export declare const $TokenPermission: {
    readonly type: "object";
    readonly properties: {
        readonly idModel: {
            readonly oneOf: readonly [{
                readonly $ref: "#/components/schemas/TrelloID";
            }, {
                readonly type: "string";
                readonly enum: readonly ["*"];
            }];
        };
        readonly modelType: {
            readonly type: "string";
            readonly enum: readonly ["board", "member", "organization", "enterprise"];
        };
        readonly read: {
            readonly type: "boolean";
        };
        readonly write: {
            readonly type: "boolean";
        };
    };
};

export declare const $TransferrableOrganization: {
    readonly type: "object";
    readonly properties: {
        readonly transferrable: {
            readonly type: "boolean";
            readonly example: true;
        };
        readonly newBillableMembers: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly $ref: "#/components/schemas/TrelloID";
                        readonly example: "5ab10be237846c43015f1091";
                    };
                    readonly fullName: {
                        readonly type: "string";
                        readonly example: "Bob Loblaw";
                    };
                    readonly username: {
                        readonly type: "string";
                        readonly example: "bobloblaw";
                    };
                    readonly initials: {
                        readonly type: "string";
                        readonly example: "BL";
                    };
                    readonly avatarHash: {
                        readonly type: "string";
                        readonly example: "fc8faaaee46666a4eb8b626c08933e16";
                    };
                };
            };
        };
        readonly restrictedMembers: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly $ref: "#/components/schemas/TrelloID";
                        readonly example: "5ab10be237846c43015f1091";
                    };
                    readonly fullName: {
                        readonly type: "string";
                        readonly example: "Bob Loblaw";
                    };
                    readonly username: {
                        readonly type: "string";
                        readonly example: "bobloblaw";
                    };
                    readonly initials: {
                        readonly type: "string";
                        readonly example: "BL";
                    };
                    readonly avatarHash: {
                        readonly type: "string";
                        readonly example: "fc8faaaee46666a4eb8b626c08933e16";
                    };
                };
            };
        };
    };
};

export declare const $TrelloID: {
    readonly type: "string";
    readonly pattern: "^[0-9a-fA-F]{24}$";
    readonly example: "5abbe4b7ddc1b351ef961414";
};

export declare const $TrelloList: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
        };
        readonly name: {
            readonly type: "string";
            readonly description: "The name of the list";
            readonly example: "Things to buy today";
        };
        readonly closed: {
            readonly type: "boolean";
        };
        readonly pos: {
            readonly type: "number";
        };
        readonly softLimit: {
            readonly type: "string";
        };
        readonly idBoard: {
            readonly type: "string";
        };
        readonly subscribed: {
            readonly type: "boolean";
        };
        readonly limits: {
            readonly $ref: "#/components/schemas/Limits";
        };
    };
};

export declare const $ViewFilter: {
    readonly type: "string";
    readonly enum: readonly ["all", "closed", "none", "open"];
};

export declare const $Webhook: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "58dd6dcaf8b86744d3cb4cde";
        };
        readonly description: {
            readonly type: "string";
            readonly example: "Board Webhook";
        };
        readonly idModel: {
            readonly $ref: "#/components/schemas/TrelloID";
            readonly example: "59cd149051aa57a706962996";
        };
        readonly callbackURL: {
            readonly type: "string";
            readonly format: "url";
            readonly example: "https://mywebhookurl.com/?type=board";
        };
        readonly active: {
            readonly type: "boolean";
            readonly example: true;
        };
        readonly consecutiveFailures: {
            readonly type: "number";
            readonly example: 0;
        };
        readonly firstConsecutiveFailDate: {
            readonly type: "string";
            readonly format: "date";
            readonly nullable: true;
            readonly example: any;
        };
    };
};

export declare type Action = {
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

export declare type ActionFields = 'id' | 'idMemberCreator' | 'data' | 'type' | 'date' | 'limits' | 'display' | 'memberCreator';

export declare class ApiError extends Error {
    readonly url: string;
    readonly status: number;
    readonly statusText: string;
    readonly body: unknown;
    readonly request: ApiRequestOptions;
    constructor(request: ApiRequestOptions, response: ApiResult, message: string);
}

export declare type APIKey = string;

declare type ApiRequestOptions = {
    readonly method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH';
    readonly url: string;
    readonly path?: Record<string, unknown>;
    readonly cookies?: Record<string, unknown>;
    readonly headers?: Record<string, unknown>;
    readonly query?: Record<string, unknown>;
    readonly formData?: Record<string, unknown>;
    readonly body?: any;
    readonly mediaType?: string;
    readonly responseHeader?: string;
    readonly errors?: Record<number, string>;
};

declare type ApiResult<TData = any> = {
    readonly body: TData;
    readonly ok: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly url: string;
};

export declare type APIToken = string;

export declare type Attachment = {
    id: TrelloID;
    bytes: number | null;
    date: string;
    edgeColor: Color | null;
    idMember: TrelloID;
    isUpload: boolean;
    mimeType: string;
    name: string;
    previews: {
        id: string;
        _id: string;
        scaled: boolean;
        url: string;
        bytes: number;
        height: number;
        width: number;
    }[];
    url: string;
    pos: number;
    fileName: string;
};

export declare type AttachmentFields = 'id' | 'bytes' | 'date' | 'edgeColor' | 'idMember' | 'isUpload' | 'mimeType' | 'name' | 'previews' | 'url' | 'pos';

export declare type BlockedKey = 'notification_comment_card' | 'notification_added_a_due_date' | 'notification_changed_due_date' | 'notification_card_due_soon' | 'notification_removed_from_card' | 'notification_added_attachment_to_card' | 'notification_created_card' | 'notification_moved_card' | 'notification_archived_card' | 'notification_unarchived_card';

export declare type Board = {
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
    cards?: Card[];
    lists?: TrelloList[];
    checklists?: Checklist[];
};

export declare type BoardBackground = {
    id?: TrelloID;
};

export declare type BoardFields = 'id' | 'name' | 'desc' | 'descData' | 'closed' | 'idMemberCreator' | 'idOrganization' | 'pinned' | 'url' | 'shortUrl' | 'prefs' | 'labelNames' | 'starred' | 'limits' | 'memberships' | 'enterpriseOwned' | 'all';

export declare type BoardStars = {
    id?: TrelloID;
    idBoard?: TrelloID;
    pos?: number;
};

export declare class CancelablePromise<T> implements Promise<T> {
    private _isResolved;
    private _isRejected;
    private _isCancelled;
    readonly cancelHandlers: (() => void)[];
    readonly promise: Promise<T>;
    private _resolve?;
    private _reject?;
    constructor(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: unknown) => void, onCancel: OnCancel) => void);
    get [Symbol.toStringTag](): string;
    then<TResult1 = T, TResult2 = never>(onFulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null, onRejected?: ((reason: unknown) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onRejected?: ((reason: unknown) => TResult | PromiseLike<TResult>) | null): Promise<T | TResult>;
    finally(onFinally?: (() => void) | null): Promise<T>;
    cancel(): void;
    get isCancelled(): boolean;
}

export declare class CancelError extends Error {
    constructor(message: string);
    get isCancelled(): boolean;
}

export declare type Card = {
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
    labels?: Array<(Label)>;
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

export declare type CardAging = 'pirate' | 'regular';

/**
 * The fields on a Card.
 */
export declare type CardFields = 'id' | 'address' | 'badges' | 'checkItemStates' | 'closed' | 'coordinates' | 'creationMethod' | 'dueComplete' | 'dateLastActivity' | 'desc' | 'descData' | 'due' | 'dueReminder' | 'idBoard' | 'idChecklists' | 'idLabels' | 'idList' | 'idMembers' | 'idMembersVoted' | 'idShort' | 'idAttachmentCover' | 'labels' | 'limits' | 'locationName' | 'manualCoverAttachment' | 'name' | 'pos' | 'shortLink' | 'shortUrl' | 'subscribed' | 'url' | 'cover' | 'isTemplate' | 'all';

export declare type CFValue = {
    number?: string;
};

export declare type Channel = 'email';

export declare type CheckItem = {
    idChecklist: TrelloID;
    state: 'complete' | 'incomplete';
    id: TrelloID;
    name: string;
    nameData: string | null;
    pos: string;
};

export declare type Checklist = {
    id: TrelloID;
    name: string;
    idBoard: TrelloID;
    idCard: TrelloID;
    pos: number;
    checkItems: CheckItem[];
};

export declare type ClaimableOrganizations = {
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

export declare type Color = 'yellow' | 'purple' | 'blue' | 'red' | 'green' | 'orange' | 'black' | 'sky' | 'pink' | 'lime';

export declare type CustomEmoji = {
    id?: TrelloID;
    url?: string;
    name?: string;
};

export declare type CustomField = {
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

export declare type CustomFieldItems = {
    id?: TrelloID;
    value?: {
        checked?: string;
    };
    idCustomField?: TrelloID;
    idModel?: TrelloID;
    modelType?: 'card' | 'board' | 'member';
};

export declare type customFieldItemValue = {
    value?: {
        [key: string]: unknown;
    };
};

export declare type CustomSticker = {
    id?: TrelloID;
    url?: string;
    scaled?: Array<{
        id?: TrelloID;
    }>;
};

export declare class DefaultService {
    /**
     * Get an Action
     * Get an Action
     * @param data The data for the request.
     * @param data.id The ID of the Action
     * @param data.display
     * @param data.entities
     * @param data.fields `all` or a comma-separated list of action [fields](/cloud/trello/guides/rest-api/object-definitions/#action-object)
     * @param data.member
     * @param data.memberFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param data.memberCreator Whether to include the member object for the creator of the action
     * @param data.memberCreatorFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getActionsId(data: $OpenApiTs['/actions/{id}']['get']['req']): CancelablePromise<$OpenApiTs['/actions/{id}']['get']['res'][200]>;
    /**
     * Update an Action
     * Update a specific Action. Only comment actions can be updated. Used to edit the content of a comment.
     * @param data The data for the request.
     * @param data.text The new text for the comment
     * @param data.id The ID of the Action
     * @returns unknown Success
     * @throws ApiError
     */
    static putActionsId(data: $OpenApiTs['/actions/{id}']['put']['req']): CancelablePromise<$OpenApiTs['/actions/{id}']['put']['res'][200]>;
    /**
     * Delete an Action
     * Delete a specific action. Only comment actions can be deleted.
     * @param data The data for the request.
     * @param data.id The ID of the Action
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteActionsId(data: $OpenApiTs['/actions/{id}']['delete']['req']): CancelablePromise<$OpenApiTs['/actions/{id}']['delete']['res'][200]>;
    /**
     * Get a specific field on an Action
     * Get a specific property of an action
     * @param data The data for the request.
     * @param data.id The ID of the Action
     * @param data.field An action field
     * @returns Action Success
     * @throws ApiError
     */
    static getActionsIdField(data: $OpenApiTs['/actions/{id}/{field}']['get']['req']): CancelablePromise<$OpenApiTs['/actions/{id}/{field}']['get']['res'][200]>;
    /**
     * Get the Board for an Action
     * Get the Board for an Action
     * @param data The data for the request.
     * @param data.id The ID of the action
     * @param data.fields `all` or a comma-separated list of board fields
     * @returns Board Success
     * @throws ApiError
     */
    static getActionsIdBoard(data: $OpenApiTs['/actions/{id}/board']['get']['req']): CancelablePromise<$OpenApiTs['/actions/{id}/board']['get']['res'][200]>;
    /**
     * Get the Card for an Action
     * Get the card for an action
     * @param data The data for the request.
     * @param data.id The ID of the action
     * @param data.fields `all` or a comma-separated list of card fields
     * @returns Card Success
     * @throws ApiError
     */
    static getActionsIdCard(data: $OpenApiTs['/actions/{id}/card']['get']['req']): CancelablePromise<$OpenApiTs['/actions/{id}/card']['get']['res'][200]>;
    /**
     * Get the List for an Action
     * Get the List for an Action
     * @param data The data for the request.
     * @param data.id The ID of the action
     * @param data.fields `all` or a comma-separated list of list fields
     * @returns TrelloList Success
     * @throws ApiError
     */
    static getActionsIdList(data: $OpenApiTs['/actions/{id}/list']['get']['req']): CancelablePromise<$OpenApiTs['/actions/{id}/list']['get']['res'][200]>;
    /**
     * Get the Member of an Action
     * Gets the member of an action (not the creator)
     * @param data The data for the request.
     * @param data.id The ID of the Action
     * @param data.fields `all` or a comma-separated list of member fields
     * @returns Member Success
     * @throws ApiError
     */
    static getActionsIdMember(data: $OpenApiTs['/actions/{id}/member']['get']['req']): CancelablePromise<$OpenApiTs['/actions/{id}/member']['get']['res'][200]>;
    /**
     * Get the Member Creator of an Action
     * Get the Member who created the Action
     * @param data The data for the request.
     * @param data.id The ID of the Action
     * @param data.fields `all` or a comma-separated list of member fields
     * @returns Member Success
     * @throws ApiError
     */
    static getActionsIdMembercreator(data: $OpenApiTs['/actions/{id}/memberCreator']['get']['req']): CancelablePromise<$OpenApiTs['/actions/{id}/memberCreator']['get']['res'][200]>;
    /**
     * Get the Organization of an Action
     * Get the Organization of an Action
     * @param data The data for the request.
     * @param data.id The ID of the action
     * @param data.fields `all` or a comma-separated list of organization fields
     * @returns Organization Success
     * @throws ApiError
     */
    static getActionsIdOrganization(data: $OpenApiTs['/actions/{id}/organization']['get']['req']): CancelablePromise<$OpenApiTs['/actions/{id}/organization']['get']['res'][200]>;
    /**
     * Update a Comment Action
     * Update a comment action
     * @param data The data for the request.
     * @param data.id The ID of the action to update
     * @param data.value The new text for the comment
     * @returns unknown Success
     * @throws ApiError
     */
    static putActionsIdText(data: $OpenApiTs['/actions/{id}/text']['put']['req']): CancelablePromise<$OpenApiTs['/actions/{id}/text']['put']['res'][200]>;
    /**
     * Get Action's Reactions
     * List reactions for an action
     * @param data The data for the request.
     * @param data.idAction The ID of the action
     * @param data.member Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)
     * @param data.emoji Whether to load the emoji as a nested resource.
     * @returns unknown Success
     * @throws ApiError
     */
    static getActionsIdactionReactions(data: $OpenApiTs['/actions/{idAction}/reactions']['get']['req']): CancelablePromise<$OpenApiTs['/actions/{idAction}/reactions']['get']['res'][200]>;
    /**
     * Create Reaction for Action
     * Adds a new reaction to an action
     * @param data The data for the request.
     * @param data.idAction The ID of the action
     * @param data.requestBody
     * @returns unknown Success
     * @throws ApiError
     */
    static postActionsIdactionReactions(data: $OpenApiTs['/actions/{idAction}/reactions']['post']['req']): CancelablePromise<$OpenApiTs['/actions/{idAction}/reactions']['post']['res'][200]>;
    /**
     * Get Action's Reaction
     * Get information for a reaction
     * @param data The data for the request.
     * @param data.idAction The ID of the Action
     * @param data.id The ID of the reaction
     * @param data.member Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)
     * @param data.emoji Whether to load the emoji as a nested resource.
     * @returns unknown Success
     * @throws ApiError
     */
    static getActionsIdactionReactionsId(data: $OpenApiTs['/actions/{idAction}/reactions/{id}']['get']['req']): CancelablePromise<$OpenApiTs['/actions/{idAction}/reactions/{id}']['get']['res'][200]>;
    /**
     * Delete Action's Reaction
     * Deletes a reaction
     * @param data The data for the request.
     * @param data.idAction The ID of the Action
     * @param data.id The ID of the reaction
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteActionsIdactionReactionsId(data: $OpenApiTs['/actions/{idAction}/reactions/{id}']['delete']['req']): CancelablePromise<$OpenApiTs['/actions/{idAction}/reactions/{id}']['delete']['res'][200]>;
    /**
     * List Action's summary of Reactions
     * List a summary of all reactions for an action
     * @param data The data for the request.
     * @param data.idAction The ID of the action
     * @returns unknown Success
     * @throws ApiError
     */
    static getActionsIdactionReactionsummary(data: $OpenApiTs['/actions/{idAction}/reactionsSummary']['get']['req']): CancelablePromise<$OpenApiTs['/actions/{idAction}/reactionsSummary']['get']['res'][200]>;
    /**
     * Get Application's compliance data
     * @param data The data for the request.
     * @param data.key
     * @returns unknown Success
     * @throws ApiError
     */
    static applicationsKeyCompliance(data: $OpenApiTs['/applications/{key}/compliance']['get']['req']): CancelablePromise<$OpenApiTs['/applications/{key}/compliance']['get']['res'][200]>;
    /**
     * Batch Requests
     * Make up to 10 GET requests in a single, batched API call.
     * @param data The data for the request.
     * @param data.urls A list of API routes. Maximum of 10 routes allowed. The routes should begin with a forward slash and should not include the API version number - e.g. "urls=/members/trello,/cards/[cardId]"
     * @returns unknown Success
     * @throws ApiError
     */
    static getBatch(data: $OpenApiTs['/batch']['get']['req']): CancelablePromise<$OpenApiTs['/batch']['get']['res'][200]>;
    /**
     * Get Memberships of a Board
     * Get information about the memberships users have to the board.
     * @param data The data for the request.
     * @param data.id The ID of the board
     * @param data.filter One of `admins`, `all`, `none`, `normal`
     * @param data.activity Works for premium organizations only.
     * @param data.orgMemberType Shows the type of member to the org the user is. For instance, an org admin will have a `orgMemberType` of `admin`.
     * @param data.member Determines whether to include a [nested member object](/cloud/trello/guides/rest-api/nested-resources/).
     * @param data.memberFields Fields to show if `member=true`. Valid values: [nested member resource fields](/cloud/trello/guides/rest-api/nested-resources/).
     * @returns Memberships Success
     * @throws ApiError
     */
    static getBoardsIdMemberships(data: $OpenApiTs['/boards/{id}/memberships']['get']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/memberships']['get']['res'][200]>;
    /**
     * Get a Board
     * Request a single board.
     * @param data The data for the request.
     * @param data.id
     * @param data.actions This is a nested resource. Read more about actions as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
     * @param data.boardStars Valid values are one of: `mine` or `none`.
     * @param data.cards This is a nested resource. Read more about cards as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
     * @param data.cardPluginData Use with the `cards` param to include card pluginData with the response
     * @param data.checklists This is a nested resource. Read more about checklists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
     * @param data.customFields This is a nested resource. Read more about custom fields as nested resources [here](#custom-fields-nested-resource).
     * @param data.fields The fields of the board to be included in the response. Valid values: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url
     * @param data.labels This is a nested resource. Read more about labels as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
     * @param data.lists This is a nested resource. Read more about lists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
     * @param data.members This is a nested resource. Read more about members as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
     * @param data.memberships This is a nested resource. Read more about memberships as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
     * @param data.pluginData Determines whether the pluginData for this board should be returned. Valid values: true or false.
     * @param data.organization This is a nested resource. Read more about organizations as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
     * @param data.organizationPluginData Use with the `organization` param to include organization pluginData with the response
     * @param data.myPrefs
     * @param data.tags Also known as collections, tags, refer to the collection(s) that a Board belongs to.
     * @returns Board Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static getBoardsId(data: $OpenApiTs['/boards/{id}']['get']['req']): CancelablePromise<$OpenApiTs['/boards/{id}']['get']['res'][200]>;
    /**
     * Update a Board
     * Update an existing board by id
     * @param data The data for the request.
     * @param data.id
     * @param data.name The new name for the board. 1 to 16384 characters long.
     * @param data.desc A new description for the board, 0 to 16384 characters long
     * @param data.closed Whether the board is closed
     * @param data.subscribed Whether the acting user is subscribed to the board
     * @param data.idOrganization The id of the Workspace the board should be moved to
     * @param data.prefsPermissionLevel One of: org, private, public
     * @param data.prefsSelfJoin Whether Workspace members can join the board themselves
     * @param data.prefsCardCovers Whether card covers should be displayed on this board
     * @param data.prefsHideVotes Determines whether the Voting Power-Up should hide who voted on cards or not.
     * @param data.prefsInvitations Who can invite people to this board. One of: admins, members
     * @param data.prefsVoting Who can vote on this board. One of disabled, members, observers, org, public
     * @param data.prefsComments Who can comment on cards on this board. One of: disabled, members, observers, org, public
     * @param data.prefsBackground The id of a custom background or one of: blue, orange, green, red, purple, pink, lime, sky, grey
     * @param data.prefsCardAging One of: pirate, regular
     * @param data.prefsCalendarFeedEnabled Determines whether the calendar feed is enabled or not.
     * @param data.labelNamesGreen Name for the green label. 1 to 16384 characters long
     * @param data.labelNamesYellow Name for the yellow label. 1 to 16384 characters long
     * @param data.labelNamesOrange Name for the orange label. 1 to 16384 characters long
     * @param data.labelNamesRed Name for the red label. 1 to 16384 characters long
     * @param data.labelNamesPurple Name for the purple label. 1 to 16384 characters long
     * @param data.labelNamesBlue Name for the blue label. 1 to 16384 characters long
     * @returns unknown Success
     * @throws ApiError
     */
    static putBoardsId(data: $OpenApiTs['/boards/{id}']['put']['req']): CancelablePromise<$OpenApiTs['/boards/{id}']['put']['res'][200]>;
    /**
     * Delete a Board
     * Delete a board.
     * @param data The data for the request.
     * @param data.id The id of the board to delete
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteBoardsId(data: $OpenApiTs['/boards/{id}']['delete']['req']): CancelablePromise<$OpenApiTs['/boards/{id}']['delete']['res'][200]>;
    /**
     * Get a field on a Board
     * Get a single, specific field on a board
     * @param data The data for the request.
     * @param data.id The ID of the board.
     * @param data.field The field you'd like to receive. Valid values: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
     * @returns unknown Success
     * @throws ApiError
     */
    static getBoardsIdField(data: $OpenApiTs['/boards/{id}/{field}']['get']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/{field}']['get']['res'][200]>;
    /**
     * Get Actions of a Board
     * @param data The data for the request.
     * @param data.boardId
     * @param data.fields The fields to be returned for the Actions. [See Action fields here](/cloud/trello/guides/rest-api/object-definitions/#action-object).
     * @param data.filter A comma-separated list of [action types](/cloud/trello/guides/rest-api/action-types/).
     * @param data.format The format of the returned Actions. Either list or count.
     * @param data.idModels A comma-separated list of idModels. Only actions related to these models will be returned.
     * @param data.limit The limit of the number of responses, between 0 and 1000.
     * @param data.member Whether to return the member object for each action.
     * @param data.memberFields The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) to return.
     * @param data.memberCreator Whether to return the memberCreator object for each action.
     * @param data.memberCreatorFields The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) creator to return
     * @param data.page The page of results for actions.
     * @param data.reactions Whether to show reactions on comments or not.
     * @param data.before An Action ID
     * @param data.since An Action ID
     * @returns unknown Success
     * @throws ApiError
     */
    static getBoardsIdActions(data: $OpenApiTs['/boards/{boardId}/actions']['get']['req']): CancelablePromise<$OpenApiTs['/boards/{boardId}/actions']['get']['res'][200]>;
    /**
     * Get a Card on a Board
     * Get a single Card on a Board.
     * @param data The data for the request.
     * @param data.id The ID of the board
     * @param data.idCard The id the card to retrieve.
     * @param data.fields The fields to be returned for the Actions. [See Action fields here](/cloud/trello/guides/rest-api/object-definitions/#action-object).
     * @param data.filter A comma-separated list of [action types](/cloud/trello/guides/rest-api/action-types/).
     * @param data.format The format of the returned Actions. Either list or count.
     * @param data.idModels A comma-separated list of idModels. Only actions related to these models will be returned.
     * @param data.limit The limit of the number of responses, between 0 and 1000.
     * @param data.member Whether to return the member object for each action.
     * @param data.memberFields The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) to return.
     * @param data.memberCreator Whether to return the memberCreator object for each action.
     * @param data.memberCreatorFields The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) creator to return
     * @param data.page The page of results for actions.
     * @param data.reactions Whether to show reactions on comments or not.
     * @param data.before An Action ID
     * @param data.since An Action ID
     * @returns unknown Success
     * @throws ApiError
     */
    static getBoardsIdCardsIdcard(data: $OpenApiTs['/boards/{id}/cards/{idCard}']['get']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/cards/{idCard}']['get']['res'][200]>;
    /**
     * Get boardStars on a Board
     * @param data The data for the request.
     * @param data.boardId
     * @param data.filter Valid values: mine, none
     * @returns unknown Success
     * @throws ApiError
     */
    static getBoardsIdBoardstars(data: $OpenApiTs['/boards/{boardId}/boardStars']['get']['req']): CancelablePromise<$OpenApiTs['/boards/{boardId}/boardStars']['get']['res'][200]>;
    /**
     * Get Checklists on a Board
     * Get all of the checklists on a Board.
     * @param data The data for the request.
     * @param data.id The ID of the board
     * @returns unknown Success
     * @throws ApiError
     */
    static boardsIdChecklists(data: $OpenApiTs['/boards/{id}/checklists']['get']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/checklists']['get']['res'][200]>;
    /**
     * Get Cards on a Board
     * Get all of the open Cards on a Board.
     * @param data The data for the request.
     * @param data.id
     * @returns unknown Success
     * @throws ApiError
     */
    static getBoardsIdCards(data: $OpenApiTs['/boards/{id}/cards']['get']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/cards']['get']['res'][200]>;
    /**
     * Get filtered Cards on a Board
     * Get the Cards on a Board that match a given filter.
     * @param data The data for the request.
     * @param data.id ID of the Board
     * @param data.filter Valid Values: all, closed, none, open, visible.
     * @returns unknown Success
     * @throws ApiError
     */
    static getBoardsIdCardsFilter(data: $OpenApiTs['/boards/{id}/cards/{filter}']['get']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/cards/{filter}']['get']['res'][200]>;
    /**
     * Get Custom Fields for Board
     * Get the Custom Field Definitions that exist on a board.
     * @param data The data for the request.
     * @param data.id The ID of the board
     * @returns CustomField Success
     * @throws ApiError
     */
    static getBoardsIdCustomfields(data: $OpenApiTs['/boards/{id}/customFields']['get']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/customFields']['get']['res'][200]>;
    /**
     * Get Labels on a Board
     * Get all of the Labels on a Board.
     * @param data The data for the request.
     * @param data.id The ID of the Board.
     * @param data.fields The fields to be returned for the Labels.
     * @param data.limit The number of Labels to be returned.
     * @returns unknown Success
     * @throws ApiError
     */
    static getBoardsIdLabels(data: $OpenApiTs['/boards/{id}/labels']['get']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/labels']['get']['res'][200]>;
    /**
     * Create a Label on a Board
     * Create a new Label on a Board.
     * @param data The data for the request.
     * @param data.id The id of the board to update
     * @param data.name The name of the label to be created. 1 to 16384 characters long.
     * @param data.color Sets the color of the new label. Valid values are a label color or `null`.
     * @returns unknown Success
     * @throws ApiError
     */
    static postBoardsIdLabels(data: $OpenApiTs['/boards/{id}/labels']['post']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/labels']['post']['res'][200]>;
    /**
     * Get Lists on a Board
     * Get the Lists on a Board
     * @param data The data for the request.
     * @param data.id The ID of the board
     * @param data.cards Filter to apply to Cards.
     * @param data.cardFields `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/#card-object)
     * @param data.filter Filter to apply to Lists
     * @param data.fields `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns TrelloList Success
     * @throws ApiError
     */
    static getBoardsIdLists(data: $OpenApiTs['/boards/{id}/lists']['get']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/lists']['get']['res'][200]>;
    /**
     * Create a List on a Board
     * Create a new List on a Board.
     * @param data The data for the request.
     * @param data.name The name of the list to be created. 1 to 16384 characters long.
     * @param data.id The ID of the board
     * @param data.pos Determines the position of the list. Valid values: `top`, `bottom`, or a positive number.
     * @returns TrelloList Success
     * @throws ApiError
     */
    static postBoardsIdLists(data: $OpenApiTs['/boards/{id}/lists']['post']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/lists']['post']['res'][200]>;
    /**
     * Get filtered Lists on a Board
     * @param data The data for the request.
     * @param data.id The ID of the board
     * @param data.filter One of `all`, `closed`, `none`, `open`
     * @returns unknown Success
     * @throws ApiError
     */
    static getBoardsIdListsFilter(data: $OpenApiTs['/boards/{id}/lists/{filter}']['get']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/lists/{filter}']['get']['res'][200]>;
    /**
     * Get the Members of a Board
     * Get the Members for a board
     * @param data The data for the request.
     * @param data.id The ID of the board
     * @returns unknown Success
     * @throws ApiError
     */
    static getBoardsIdMembers(data: $OpenApiTs['/boards/{id}/members']['get']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/members']['get']['res'][200]>;
    /**
     * Invite Member to Board via email
     * Invite a Member to a Board via their email address.
     * @param data The data for the request.
     * @param data.email The email address of a user to add as a member of the board.
     * @param data.id The ID of the board
     * @param data.type Valid values: admin, normal, observer. Determines what type of member the user being added should be of the board.
     * @param data.requestBody
     * @returns unknown Success
     * @throws ApiError
     */
    static putBoardsIdMembers(data: $OpenApiTs['/boards/{id}/members']['put']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/members']['put']['res'][200]>;
    /**
     * Add a Member to a Board
     * Add a member to the board.
     * @param data The data for the request.
     * @param data.type One of: admin, normal, observer. Determines the type of member this user will be on the board.
     * @param data.id The id of the board to update
     * @param data.idMember The id of the member to add to the board.
     * @param data.allowBillableGuest Optional param that allows organization admins to add multi-board guests onto a board.
     * @returns unknown Success
     * @throws ApiError
     */
    static putBoardsIdMembersIdmember(data: $OpenApiTs['/boards/{id}/members/{idMember}']['put']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/members/{idMember}']['put']['res'][200]>;
    /**
     * Remove Member from Board
     * @param data The data for the request.
     * @param data.id The id of the board to update
     * @param data.idMember The id of the member to add to the board.
     * @returns unknown Success
     * @throws ApiError
     */
    static boardsidmembersidmember(data: $OpenApiTs['/boards/{id}/members/{idMember}']['delete']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/members/{idMember}']['delete']['res'][200]>;
    /**
     * Update Membership of Member on a Board
     * Update an existing board by id
     * @param data The data for the request.
     * @param data.id The id of the board to update
     * @param data.idMembership The id of a membership that should be added to this board.
     * @param data.type One of: admin, normal, observer. Determines the type of member that this membership will be to this board.
     * @param data.memberFields Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username
     * @returns unknown Success
     * @throws ApiError
     */
    static putBoardsIdMembershipsIdmembership(data: $OpenApiTs['/boards/{id}/memberships/{idMembership}']['put']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/memberships/{idMembership}']['put']['res'][200]>;
    /**
     * Update emailPosition Pref on a Board
     * Update emailPosition Pref on a Board
     * @param data The data for the request.
     * @param data.id The id of the board to update
     * @param data.value Valid values: bottom, top. Determines the position of the email address.
     * @returns unknown Success
     * @throws ApiError
     */
    static putBoardsIdMyprefsEmailposition(data: $OpenApiTs['/boards/{id}/myPrefs/emailPosition']['put']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/myPrefs/emailPosition']['put']['res'][200]>;
    /**
     * Update idEmailList Pref on a Board
     * Change the default list that email-to-board cards are created in.
     * @param data The data for the request.
     * @param data.id The id of the board to update
     * @param data.value The id of an email list.
     * @returns unknown Success
     * @throws ApiError
     */
    static putBoardsIdMyprefsIdemaillist(data: $OpenApiTs['/boards/{id}/myPrefs/idEmailList']['put']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/myPrefs/idEmailList']['put']['res'][200]>;
    /**
     * Update showListGuide Pref on a Board
     * @param data The data for the request.
     * @param data.id The id of the board to update
     * @param data.value Determines whether to show the list guide.
     * @returns unknown Success
     * @throws ApiError
     */
    static putBoardsIdMyPrefsShowlistguide(data: $OpenApiTs['/boards/{id}/myPrefs/showListGuide']['put']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/myPrefs/showListGuide']['put']['res'][200]>;
    /**
     * Update showSidebar Pref on a Board
     * @param data The data for the request.
     * @param data.id The id of the board to update
     * @param data.value Determines whether to show the side bar.
     * @returns unknown Success
     * @throws ApiError
     */
    static putBoardsIdMyPrefsShowsidebar(data: $OpenApiTs['/boards/{id}/myPrefs/showSidebar']['put']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/myPrefs/showSidebar']['put']['res'][200]>;
    /**
     * Update showSidebarActivity Pref on a Board
     * @param data The data for the request.
     * @param data.id The id of the board to update
     * @param data.value Determines whether to show sidebar activity.
     * @returns unknown Success
     * @throws ApiError
     */
    static putBoardsIdMyPrefsShowsidebaractivity(data: $OpenApiTs['/boards/{id}/myPrefs/showSidebarActivity']['put']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/myPrefs/showSidebarActivity']['put']['res'][200]>;
    /**
     * Update showSidebarBoardActions Pref on a Board
     * @param data The data for the request.
     * @param data.id The id of the board to update
     * @param data.value Determines whether to show the sidebar board actions.
     * @returns unknown Success
     * @throws ApiError
     */
    static putBoardsIdMyPrefsShowsidebarboardactions(data: $OpenApiTs['/boards/{id}/myPrefs/showSidebarBoardActions']['put']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/myPrefs/showSidebarBoardActions']['put']['res'][200]>;
    /**
     * Update showSidebarMembers Pref on a Board
     * @param data The data for the request.
     * @param data.id The id of the board to update
     * @param data.value Determines whether to show members of the board in the sidebar.
     * @returns unknown Success
     * @throws ApiError
     */
    static putBoardsIdMyPrefsShowsidebarmembers(data: $OpenApiTs['/boards/{id}/myPrefs/showSidebarMembers']['put']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/myPrefs/showSidebarMembers']['put']['res'][200]>;
    /**
     * Create a Board
     * Create a new board.
     * @param data The data for the request.
     * @param data.name The new name for the board. 1 to 16384 characters long.
     * @param data.defaultLabels Determines whether to use the default set of labels.
     * @param data.defaultLists Determines whether to add the default set of lists to a board (To Do, Doing, Done). It is ignored if `idBoardSource` is provided.
     * @param data.desc A new description for the board, 0 to 16384 characters long
     * @param data.idOrganization The id or name of the Workspace the board should belong to.
     * @param data.idBoardSource The id of a board to copy into the new board.
     * @param data.keepFromSource To keep cards from the original board pass in the value `cards`
     * @param data.powerUps The Power-Ups that should be enabled on the new board. One of: `all`, `calendar`, `cardAging`, `recap`, `voting`.
     * @param data.prefsPermissionLevel The permissions level of the board. One of: `org`, `private`, `public`.
     * @param data.prefsVoting Who can vote on this board. One of `disabled`, `members`, `observers`, `org`, `public`.
     * @param data.prefsComments Who can comment on cards on this board. One of: `disabled`, `members`, `observers`, `org`, `public`.
     * @param data.prefsInvitations Determines what types of members can invite users to join. One of: `admins`, `members`.
     * @param data.prefsSelfJoin Determines whether users can join the boards themselves or whether they have to be invited.
     * @param data.prefsCardCovers Determines whether card covers are enabled.
     * @param data.prefsBackground The id of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`.
     * @param data.prefsCardAging Determines the type of card aging that should take place on the board if card aging is enabled. One of: `pirate`, `regular`.
     * @returns unknown Success
     * @throws ApiError
     */
    static postBoards(data: $OpenApiTs['/boards/']['post']['req']): CancelablePromise<$OpenApiTs['/boards/']['post']['res'][200]>;
    /**
     * Create a calendarKey for a Board
     * Create a new board.
     * @param data The data for the request.
     * @param data.id The id of the board to update
     * @returns unknown Success
     * @throws ApiError
     */
    static postBoardsIdCalendarkeyGenerate(data: $OpenApiTs['/boards/{id}/calendarKey/generate']['post']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/calendarKey/generate']['post']['res'][200]>;
    /**
     * Create a emailKey for a Board
     * @param data The data for the request.
     * @param data.id The id of the board to update
     * @returns unknown Success
     * @throws ApiError
     */
    static postBoardsIdEmailkeyGenerate(data: $OpenApiTs['/boards/{id}/emailKey/generate']['post']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/emailKey/generate']['post']['res'][200]>;
    /**
     * Create a Tag for a Board
     * @param data The data for the request.
     * @param data.id The id of the board to update
     * @param data.value The id of a tag from the organization to which this board belongs.
     * @returns unknown Success
     * @throws ApiError
     */
    static postBoardsIdIdtags(data: $OpenApiTs['/boards/{id}/idTags']['post']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/idTags']['post']['res'][200]>;
    /**
     * Mark Board as viewed
     * @param data The data for the request.
     * @param data.id The id of the board to update
     * @returns unknown Success
     * @throws ApiError
     */
    static postBoardsIdMarkedasviewed(data: $OpenApiTs['/boards/{id}/markedAsViewed']['post']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/markedAsViewed']['post']['res'][200]>;
    /**
     * Get Enabled Power-Ups on Board
     * Get the enabled Power-Ups on a board
     * @param data The data for the request.
     * @param data.id The ID of the Board
     * @returns Plugin Success
     * @throws ApiError
     */
    static getBoardsIdBoardplugins(data: $OpenApiTs['/boards/{id}/boardPlugins']['get']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/boardPlugins']['get']['res'][200]>;
    /**
     * @deprecated
     * Enable a Power-Up on a Board
     * Enable a Power-Up on a Board
     * @param data The data for the request.
     * @param data.id The ID of the Board
     * @param data.idPlugin The ID of the Power-Up to enable
     * @returns unknown Success
     * @throws ApiError
     */
    static postBoardsIdBoardplugins(data: $OpenApiTs['/boards/{id}/boardPlugins']['post']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/boardPlugins']['post']['res'][200]>;
    /**
     * @deprecated
     * Disable a Power-Up on a Board
     * Disable a Power-Up on a board
     * @param data The data for the request.
     * @param data.id The ID of the board
     * @param data.idPlugin The ID of the Power-Up to disable
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteBoardsIdBoardplugins(data: $OpenApiTs['/boards/{id}/boardPlugins/{idPlugin}']['delete']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/boardPlugins/{idPlugin}']['delete']['res'][200]>;
    /**
     * Get Power-Ups on a Board
     * List the Power-Ups on a board
     * @param data The data for the request.
     * @param data.id The ID of the board
     * @param data.filter One of: `enabled` or `available`
     * @returns Plugin Success
     * @throws ApiError
     */
    static getBoardIdPlugins(data: $OpenApiTs['/boards/{id}/plugins']['get']['req']): CancelablePromise<$OpenApiTs['/boards/{id}/plugins']['get']['res'][200]>;
    /**
     * Create a new Card
     * Create a new card. Query parameters may also be replaced with a JSON request body instead.
     * @param data The data for the request.
     * @param data.idList The ID of the list the card should be created in
     * @param data.name The name for the card
     * @param data.desc The description for the card
     * @param data.pos The position of the new card. `top`, `bottom`, or a positive float
     * @param data.due A due date for the card
     * @param data.start The start date of a card, or `null`
     * @param data.dueComplete
     * @param data.idMembers Comma-separated list of member IDs to add to the card
     * @param data.idLabels Comma-separated list of label IDs to add to the card
     * @param data.urlSource A URL starting with `http://` or `https://`
     * @param data.fileSource
     * @param data.mimeType The mimeType of the attachment. Max length 256
     * @param data.idCardSource The ID of a card to copy into the new card
     * @param data.keepFromSource If using `idCardSource` you can specify which properties to copy over. `all` or comma-separated list of: `attachments,checklists,customFields,comments,due,start,labels,members,start,stickers`
     * @param data.address For use with/by the Map View
     * @param data.locationName For use with/by the Map View
     * @param data.coordinates For use with/by the Map View. Should take the form latitude,longitude
     * @returns Card Success
     * @throws ApiError
     */
    static postCards(data: $OpenApiTs['/cards']['post']['req']): CancelablePromise<$OpenApiTs['/cards']['post']['res'][200]>;
    /**
     * Get a Card
     * Get a card by its ID
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.fields `all` or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `badges, checkItemStates, closed, dateLastActivity, desc, descData, due, start, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl, url`
     * @param data.actions See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)
     * @param data.attachments `true`, `false`, or `cover`
     * @param data.attachmentFields `all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param data.members Whether to return member objects for members on the card
     * @param data.memberFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`
     * @param data.membersVoted Whether to return member objects for members who voted on the card
     * @param data.memberVotedFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`
     * @param data.checkItemStates
     * @param data.checklists Whether to return the checklists on the card. `all` or `none`
     * @param data.checklistFields `all` or a comma-separated list of `idBoard,idCard,name,pos`
     * @param data.board Whether to return the board object the card is on
     * @param data.boardFields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object). **Defaults**: `name, desc, descData, closed, idOrganization, pinned, url, prefs`
     * @param data.list See the [Lists Nested Resource](/cloud/trello/guides/rest-api/nested-resources/)
     * @param data.pluginData Whether to include pluginData on the card with the response
     * @param data.stickers Whether to include sticker models with the response
     * @param data.stickerFields `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param data.customFieldItems Whether to include the customFieldItems
     * @returns Card Success
     * @throws ApiError
     */
    static getCardsId(data: $OpenApiTs['/cards/{id}']['get']['req']): CancelablePromise<$OpenApiTs['/cards/{id}']['get']['res'][200]>;
    /**
     * Update a Card
     * Update a card. Query parameters may also be replaced with a JSON request body instead.
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.name The new name for the card
     * @param data.desc The new description for the card
     * @param data.closed Whether the card should be archived (closed: true)
     * @param data.idMembers Comma-separated list of member IDs
     * @param data.idAttachmentCover The ID of the image attachment the card should use as its cover, or null for none
     * @param data.idList The ID of the list the card should be in
     * @param data.idLabels Comma-separated list of label IDs
     * @param data.idBoard The ID of the board the card should be on
     * @param data.pos The position of the card in its list. `top`, `bottom`, or a positive float
     * @param data.due When the card is due, or `null`
     * @param data.start The start date of a card, or `null`
     * @param data.dueComplete Whether the due date should be marked complete
     * @param data.subscribed Whether the member is should be subscribed to the card
     * @param data.address For use with/by the Map View
     * @param data.locationName For use with/by the Map View
     * @param data.coordinates For use with/by the Map View. Should be latitude,longitude
     * @param data.cover Updates the card's cover
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
     * @returns Card Success
     * @throws ApiError
     */
    static putCardsId(data: $OpenApiTs['/cards/{id}']['put']['req']): CancelablePromise<$OpenApiTs['/cards/{id}']['put']['res'][200]>;
    /**
     * Delete a Card
     * Delete a Card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteCardsId(data: $OpenApiTs['/cards/{id}']['delete']['req']): CancelablePromise<$OpenApiTs['/cards/{id}']['delete']['res'][200]>;
    /**
     * Get a field on a Card
     * Get a specific property of a card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.field The desired field.
     * @returns Card Success
     * @throws ApiError
     */
    static getCardsIdField(data: $OpenApiTs['/cards/{id}/{field}']['get']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/{field}']['get']['res'][200]>;
    /**
     * Get Actions on a Card
     * List the Actions on a Card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.filter A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
     * @param data.page The page of results for actions. Each page of results has 50 actions.
     * @returns Action Success
     * @throws ApiError
     */
    static getCardsIdActions(data: $OpenApiTs['/cards/{id}/actions']['get']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/actions']['get']['res'][200]>;
    /**
     * Get Attachments on a Card
     * List the attachments on a card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.fields `all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param data.filter Use `cover` to restrict to just the cover attachment
     * @returns unknown Success
     * @throws ApiError
     */
    static getCardsIdAttachments(data: $OpenApiTs['/cards/{id}/attachments']['get']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/attachments']['get']['res'][200]>;
    /**
     * Create Attachment On Card
     * Create an Attachment to a Card. See https://glitch.com/~trello-attachments-api for code examples.
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.name The name of the attachment. Max length 256.
     * @param data.file The file to attach, as multipart/form-data
     * @param data.mimeType The mimeType of the attachment. Max length 256
     * @param data.url A URL to attach. Must start with `http://` or `https://`
     * @param data.setCover Determines whether to use the new attachment as a cover for the Card.
     * @returns unknown Success
     * @throws ApiError
     */
    static postCardsIdAttachments(data: $OpenApiTs['/cards/{id}/attachments']['post']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/attachments']['post']['res'][200]>;
    /**
     * Get an Attachment on a Card
     * Get a specific Attachment on a Card.
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.idAttachment The ID of the Attachment
     * @param data.fields The Attachment fields to be included in the response.
     * @returns unknown Success
     * @throws ApiError
     */
    static getCardsIdAttachmentsIdattachment(data: $OpenApiTs['/cards/{id}/attachments/{idAttachment}']['get']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/attachments/{idAttachment}']['get']['res'][200]>;
    /**
     * Delete an Attachment on a Card
     * Delete an Attachment
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.idAttachment The ID of the attachment to delete
     * @returns unknown Success
     * @throws ApiError
     */
    static deletedCardsIdAttachmentsIdattachment(data: $OpenApiTs['/cards/{id}/attachments/{idAttachment}']['delete']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/attachments/{idAttachment}']['delete']['res'][200]>;
    /**
     * Get the Board the Card is on
     * Get the board a card is on
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object)
     * @returns unknown Success
     * @throws ApiError
     */
    static getCardsIdBoard(data: $OpenApiTs['/cards/{id}/board']['get']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/board']['get']['res'][200]>;
    /**
     * Get checkItems on a Card
     * Get the completed checklist items on a card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.fields `all` or a comma-separated list of: `idCheckItem`, `state`
     * @returns unknown Success
     * @throws ApiError
     */
    static getCardsIdCheckitemstates(data: $OpenApiTs['/cards/{id}/checkItemStates']['get']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/checkItemStates']['get']['res'][200]>;
    /**
     * Get Checklists on a Card
     * Get the checklists on a card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.checkItems `all` or `none`
     * @param data.checkItemFields `all` or a comma-separated list of: `name,nameData,pos,state,type,due,dueReminder,idMember`
     * @param data.filter `all` or `none`
     * @param data.fields `all` or a comma-separated list of: `idBoard,idCard,name,pos`
     * @returns unknown Success
     * @throws ApiError
     */
    static getCardsIdChecklists(data: $OpenApiTs['/cards/{id}/checklists']['get']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/checklists']['get']['res'][200]>;
    /**
     * Create Checklist on a Card
     * Create a new checklist on a card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.name The name of the checklist
     * @param data.idChecklistSource The ID of a source checklist to copy into the new one
     * @param data.pos The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
     * @returns unknown Success
     * @throws ApiError
     */
    static postCardsIdChecklists(data: $OpenApiTs['/cards/{id}/checklists']['post']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/checklists']['post']['res'][200]>;
    /**
     * Get checkItem on a Card
     * Get a specific checkItem on a card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.idCheckItem The ID of the checkitem
     * @param data.fields `all` or a comma-separated list of `name,nameData,pos,state,type,due,dueReminder,idMember`
     * @returns unknown Success
     * @throws ApiError
     */
    static getCardsIdCheckitemIdcheckitem(data: $OpenApiTs['/cards/{id}/checkItem/{idCheckItem}']['get']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/checkItem/{idCheckItem}']['get']['res'][200]>;
    /**
     * Update a checkItem on a Card
     * Update an item in a checklist on a card.
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.idCheckItem The ID of the checkitem
     * @param data.name The new name for the checklist item
     * @param data.state One of: `complete`, `incomplete`
     * @param data.idChecklist The ID of the checklist this item is in
     * @param data.pos `top`, `bottom`, or a positive float
     * @param data.due A due date for the checkitem
     * @param data.dueReminder A dueReminder for the due date on the checkitem
     * @param data.idMember The ID of the member to remove from the card
     * @returns unknown Success
     * @throws ApiError
     */
    static putCardsIdCheckitemIdcheckitem(data: $OpenApiTs['/cards/{id}/checkItem/{idCheckItem}']['put']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/checkItem/{idCheckItem}']['put']['res'][200]>;
    /**
     * Delete checkItem on a Card
     * Delete a checklist item
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.idCheckItem The ID of the checkitem
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteCardsIdCheckitemIdcheckitem(data: $OpenApiTs['/cards/{id}/checkItem/{idCheckItem}']['delete']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/checkItem/{idCheckItem}']['delete']['res'][200]>;
    /**
     * Get the List of a Card
     * Get the list a card is in
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.fields `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getCardsIdList(data: $OpenApiTs['/cards/{id}/list']['get']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/list']['get']['res'][200]>;
    /**
     * Get the Members of a Card
     * Get the members on a card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getCardsIdMembers(data: $OpenApiTs['/cards/{id}/members']['get']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/members']['get']['res'][200]>;
    /**
     * Get Members who have voted on a Card
     * Get the members who have voted on a card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getCardsIdMembersvoted(data: $OpenApiTs['/cards/{id}/membersVoted']['get']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/membersVoted']['get']['res'][200]>;
    /**
     * Add Member vote to Card
     * Vote on the card for a given member.
     * @param data The data for the request.
     * @param data.value The ID of the member to vote 'yes' on the card
     * @param data.id The ID of the Card
     * @returns unknown Success
     * @throws ApiError
     */
    static cardsidmembersvoted1(data: $OpenApiTs['/cards/{id}/membersVoted']['post']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/membersVoted']['post']['res'][200]>;
    /**
     * Get pluginData on a Card
     * Get any shared pluginData on a card.
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @returns unknown Success
     * @throws ApiError
     */
    static getCardsIdPlugindata(data: $OpenApiTs['/cards/{id}/pluginData']['get']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/pluginData']['get']['res'][200]>;
    /**
     * Get Stickers on a Card
     * Get the stickers on a card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.fields `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getCardsIdStickers(data: $OpenApiTs['/cards/{id}/stickers']['get']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/stickers']['get']['res'][200]>;
    /**
     * Add a Sticker to a Card
     * Add a sticker to a card
     * @param data The data for the request.
     * @param data.image For custom stickers, the id of the sticker. For default stickers, the string identifier (like 'taco-cool', see below)
     * @param data.top The top position of the sticker, from -60 to 100
     * @param data.left The left position of the sticker, from -60 to 100
     * @param data.zIndex The z-index of the sticker
     * @param data.id The ID of the Card
     * @param data.rotate The rotation of the sticker
     * @returns unknown Success
     * @throws ApiError
     */
    static postCardsIdStickers(data: $OpenApiTs['/cards/{id}/stickers']['post']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/stickers']['post']['res'][200]>;
    /**
     * Get a Sticker on a Card
     * Get a specific sticker on a card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.idSticker The ID of the sticker
     * @param data.fields `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getCardsIdStickersIdsticker(data: $OpenApiTs['/cards/{id}/stickers/{idSticker}']['get']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/stickers/{idSticker}']['get']['res'][200]>;
    /**
     * Delete a Sticker on a Card
     * Remove a sticker from the card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.idSticker The ID of the sticker
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteCardsIdStickersIdsticker(data: $OpenApiTs['/cards/{id}/stickers/{idSticker}']['delete']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/stickers/{idSticker}']['delete']['res'][200]>;
    /**
     * Update a Sticker on a Card
     * Update a sticker on a card
     * @param data The data for the request.
     * @param data.top The top position of the sticker, from -60 to 100
     * @param data.left The left position of the sticker, from -60 to 100
     * @param data.zIndex The z-index of the sticker
     * @param data.id The ID of the Card
     * @param data.idSticker The ID of the sticker
     * @param data.rotate The rotation of the sticker
     * @returns unknown Success
     * @throws ApiError
     */
    static putCardsIdStickersIdsticker(data: $OpenApiTs['/cards/{id}/stickers/{idSticker}']['put']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/stickers/{idSticker}']['put']['res'][200]>;
    /**
     * Update Comment Action on a Card
     * Update an existing comment
     * @param data The data for the request.
     * @param data.text The new text for the comment
     * @param data.id The ID of the Card
     * @param data.idAction The ID of the comment action to update
     * @returns unknown Success
     * @throws ApiError
     */
    static putCardsIdActionsIdactionComments(data: $OpenApiTs['/cards/{id}/actions/{idAction}/comments']['put']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/actions/{idAction}/comments']['put']['res'][200]>;
    /**
     * Delete a comment on a Card
     * Delete a comment
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.idAction The ID of the comment action to update
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteCardsIdActionsIdComments(data: $OpenApiTs['/cards/{id}/actions/{idAction}/comments']['delete']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/actions/{idAction}/comments']['delete']['res'][200]>;
    /**
     * Update Custom Field item on Card
     * Setting, updating, and removing the value for a Custom Field on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)
     * @param data The data for the request.
     * @param data.idCard ID of the card that the Custom Field value should be set/updated for
     * @param data.idCustomField ID of the Custom Field on the card.
     * @param data.requestBody
     * @returns unknown Success
     * @throws ApiError
     */
    static putCardsIdcardCustomfieldIdcustomfieldItem(data: $OpenApiTs['/cards/{idCard}/customField/{idCustomField}/item']['put']['req']): CancelablePromise<$OpenApiTs['/cards/{idCard}/customField/{idCustomField}/item']['put']['res'][200]>;
    /**
     * Update Multiple Custom Field items on Card
     * Setting, updating, and removing the values for multiple Custom Fields on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)
     * @param data The data for the request.
     * @param data.requestBody
     * @returns unknown Success
     * @throws ApiError
     */
    static putCardsIdcardCustomfields(data?: $OpenApiTs['/cards/{idCard}/customFields']['put']['req']): CancelablePromise<$OpenApiTs['/cards/{idCard}/customFields']['put']['res'][200]>;
    /**
     * Get Custom Field Items for a Card
     * Get the custom field items for a card.
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @returns CustomFieldItems Success
     * @throws ApiError
     */
    static getCardsIdCustomfielditems(data: $OpenApiTs['/cards/{id}/customFieldItems']['get']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/customFieldItems']['get']['res'][200]>;
    /**
     * Add a new comment to a Card
     * Add a new comment to a card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.text The comment
     * @returns Action Success
     * @throws ApiError
     */
    static postCardsIdActionsComments(data: $OpenApiTs['/cards/{id}/actions/comments']['post']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/actions/comments']['post']['res'][200]>;
    /**
     * Add a Label to a Card
     * Add a label to a card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.value The ID of the label to add
     * @returns unknown Success
     * @throws ApiError
     */
    static postCardsIdIdlabels(data: $OpenApiTs['/cards/{id}/idLabels']['post']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/idLabels']['post']['res'][200]>;
    /**
     * Add a Member to a Card
     * Add a member to a card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.value The ID of the Member to add to the card
     * @returns unknown Success
     * @throws ApiError
     */
    static postCardsIdIdmembers(data: $OpenApiTs['/cards/{id}/idMembers']['post']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/idMembers']['post']['res'][200]>;
    /**
     * Create a new Label on a Card
     * Create a new label for the board and add it to the given card.
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.color A valid label color or `null`. See [labels](/cloud/trello/guides/rest-api/object-definitions/)
     * @param data.name A name for the label
     * @returns unknown Success
     * @throws ApiError
     */
    static postCardsIdLabels(data: $OpenApiTs['/cards/{id}/labels']['post']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/labels']['post']['res'][200]>;
    /**
     * Mark a Card's Notifications as read
     * Mark notifications about this card as read
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @returns unknown Success
     * @throws ApiError
     */
    static postCardsIdMarkassociatednotificationsread(data: $OpenApiTs['/cards/{id}/markAssociatedNotificationsRead']['post']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/markAssociatedNotificationsRead']['post']['res'][200]>;
    /**
     * Remove a Label from a Card
     * Remove a label from a card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.idLabel The ID of the label to remove
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteCardsIdIdlabelsIdlabel(data: $OpenApiTs['/cards/{id}/idLabels/{idLabel}']['delete']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/idLabels/{idLabel}']['delete']['res'][200]>;
    /**
     * Remove a Member from a Card
     * Remove a member from a card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.idMember The ID of the member to remove from the card
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteIdIdmembersIdmember(data: $OpenApiTs['/cards/{id}/idMembers/{idMember}']['delete']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/idMembers/{idMember}']['delete']['res'][200]>;
    /**
     * Remove a Member's Vote on a Card
     * Remove a member's vote from a card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.idMember The ID of the member whose vote to remove
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteCardsIdMembersvotedIdmember(data: $OpenApiTs['/cards/{id}/membersVoted/{idMember}']['delete']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/membersVoted/{idMember}']['delete']['res'][200]>;
    /**
     * Update Checkitem on Checklist on Card
     * Update an item in a checklist on a card.
     * @param data The data for the request.
     * @param data.idCard The ID of the Card
     * @param data.idCheckItem The ID of the checklist item to update
     * @param data.idChecklist The ID of the item to update.
     * @param data.pos `top`, `bottom`, or a positive float
     * @returns CheckItem Success
     * @throws ApiError
     */
    static putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem(data: $OpenApiTs['/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}']['put']['req']): CancelablePromise<$OpenApiTs['/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}']['put']['res'][200]>;
    /**
     * Delete a Checklist on a Card
     * Delete a checklist from a card
     * @param data The data for the request.
     * @param data.id The ID of the Card
     * @param data.idChecklist The ID of the checklist to delete
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteCardsIdChecklistsIdchecklist(data: $OpenApiTs['/cards/{id}/checklists/{idChecklist}']['delete']['req']): CancelablePromise<$OpenApiTs['/cards/{id}/checklists/{idChecklist}']['delete']['res'][200]>;
    /**
     * Create a Checklist
     * @param data The data for the request.
     * @param data.idCard The ID of the Card that the checklist should be added to.
     * @param data.name The name of the checklist. Should be a string of length 1 to 16384.
     * @param data.pos The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
     * @param data.idChecklistSource The ID of a checklist to copy into the new checklist.
     * @returns unknown Success
     * @throws ApiError
     */
    static postChecklists(data: $OpenApiTs['/checklists']['post']['req']): CancelablePromise<$OpenApiTs['/checklists']['post']['res'][200]>;
    /**
     * Get a Checklist
     * @param data The data for the request.
     * @param data.id ID of a checklist.
     * @param data.cards Valid values: `all`, `closed`, `none`, `open`, `visible`. Cards is a nested resource. The additional query params available are documented at [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource).
     * @param data.checkItems The check items on the list to return. One of: `all`, `none`.
     * @param data.checkItemFields The fields on the checkItem to return if checkItems are being returned. `all` or a comma-separated list of: `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`
     * @param data.fields `all` or a comma-separated list of checklist [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getChecklistsId(data: $OpenApiTs['/checklists/{id}']['get']['req']): CancelablePromise<$OpenApiTs['/checklists/{id}']['get']['res'][200]>;
    /**
     * Update a Checklist
     * Update an existing checklist.
     * @param data The data for the request.
     * @param data.id ID of a checklist.
     * @param data.name Name of the new checklist being created. Should be length of 1 to 16384.
     * @param data.pos Determines the position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
     * @returns unknown Success
     * @throws ApiError
     */
    static putCheclistsId(data: $OpenApiTs['/checklists/{id}']['put']['req']): CancelablePromise<$OpenApiTs['/checklists/{id}']['put']['res'][200]>;
    /**
     * Delete a Checklist
     * Delete a checklist
     * @param data The data for the request.
     * @param data.id ID of a checklist.
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteChecklistsId(data: $OpenApiTs['/checklists/{id}']['delete']['req']): CancelablePromise<$OpenApiTs['/checklists/{id}']['delete']['res'][200]>;
    /**
     * Get field on a Checklist
     * @param data The data for the request.
     * @param data.id ID of a checklist.
     * @param data.field Field to update.
     * @returns unknown Success
     * @throws ApiError
     */
    static getChecklistsIdField(data: $OpenApiTs['/checklists/{id}/{field}']['get']['req']): CancelablePromise<$OpenApiTs['/checklists/{id}/{field}']['get']['res'][200]>;
    /**
     * Update field on a Checklist
     * @param data The data for the request.
     * @param data.value The value to change the checklist name to. Should be a string of length 1 to 16384.
     * @param data.id ID of a checklist.
     * @param data.field Field to update.
     * @returns unknown Success
     * @throws ApiError
     */
    static putChecklistsIdField(data: $OpenApiTs['/checklists/{id}/{field}']['put']['req']): CancelablePromise<$OpenApiTs['/checklists/{id}/{field}']['put']['res'][200]>;
    /**
     * Get the Board the Checklist is on
     * @param data The data for the request.
     * @param data.id ID of a checklist.
     * @param data.fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getChecklistsIdBoard(data: $OpenApiTs['/checklists/{id}/board']['get']['req']): CancelablePromise<$OpenApiTs['/checklists/{id}/board']['get']['res'][200]>;
    /**
     * Get the Card a Checklist is on
     * @param data The data for the request.
     * @param data.id ID of a checklist.
     * @returns unknown Success
     * @throws ApiError
     */
    static getChecklistsIdCards(data: $OpenApiTs['/checklists/{id}/cards']['get']['req']): CancelablePromise<$OpenApiTs['/checklists/{id}/cards']['get']['res'][200]>;
    /**
     * Get Checkitems on a Checklist
     * @param data The data for the request.
     * @param data.id ID of a checklist.
     * @param data.filter One of: `all`, `none`.
     * @param data.fields One of: `all`, `name`, `nameData`, `pos`, `state`,`type`, `due`, `dueReminder`, `idMember`.
     * @returns unknown Success
     * @throws ApiError
     */
    static getChecklistsIdCheckitems(data: $OpenApiTs['/checklists/{id}/checkItems']['get']['req']): CancelablePromise<$OpenApiTs['/checklists/{id}/checkItems']['get']['res'][200]>;
    /**
     * Create Checkitem on Checklist
     * @param data The data for the request.
     * @param data.name The name of the new check item on the checklist. Should be a string of length 1 to 16384.
     * @param data.id ID of a checklist.
     * @param data.pos The position of the check item in the checklist. One of: `top`, `bottom`, or a positive number.
     * @param data.checked Determines whether the check item is already checked when created.
     * @param data.due A due date for the checkitem
     * @param data.dueReminder A dueReminder for the due date on the checkitem
     * @param data.idMember An ID of a member resource.
     * @returns unknown Success
     * @throws ApiError
     */
    static postChecklistsIdCheckitems(data: $OpenApiTs['/checklists/{id}/checkItems']['post']['req']): CancelablePromise<$OpenApiTs['/checklists/{id}/checkItems']['post']['res'][200]>;
    /**
     * Get a Checkitem on a Checklist
     * @param data The data for the request.
     * @param data.id ID of a checklist.
     * @param data.idCheckItem ID of the check item to retrieve.
     * @param data.fields One of: `all`, `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`,.
     * @returns unknown Success
     * @throws ApiError
     */
    static getChecklistsIdCheckitemsIdcheckitem(data: $OpenApiTs['/checklists/{id}/checkItems/{idCheckItem}']['get']['req']): CancelablePromise<$OpenApiTs['/checklists/{id}/checkItems/{idCheckItem}']['get']['res'][200]>;
    /**
     * Delete Checkitem from Checklist
     * Remove an item from a checklist
     * @param data The data for the request.
     * @param data.id ID of a checklist.
     * @param data.idCheckItem ID of the check item to retrieve.
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteChecklistsIdCheckitemsIdcheckitem(data: $OpenApiTs['/checklists/{id}/checkItems/{idCheckItem}']['delete']['req']): CancelablePromise<$OpenApiTs['/checklists/{id}/checkItems/{idCheckItem}']['delete']['res'][200]>;
    /**
     * Create a new Custom Field on a Board
     * Create a new Custom Field on a board.
     * @param data The data for the request.
     * @param data.requestBody
     * @returns CustomField Success
     * @throws ApiError
     */
    static postCustomfields(data?: $OpenApiTs['/customFields']['post']['req']): CancelablePromise<$OpenApiTs['/customFields']['post']['res'][200]>;
    /**
     * Get a Custom Field
     * @param data The data for the request.
     * @param data.id ID of the Custom Field.
     * @returns CustomField Success
     * @throws ApiError
     */
    static getCustomfieldsId(data: $OpenApiTs['/customFields/{id}']['get']['req']): CancelablePromise<$OpenApiTs['/customFields/{id}']['get']['res'][200]>;
    /**
     * Update a Custom Field definition
     * Update a Custom Field definition.
     * @param data The data for the request.
     * @param data.id ID of the Custom Field.
     * @param data.requestBody
     * @returns CustomField Success
     * @throws ApiError
     */
    static putCustomfieldsId(data: $OpenApiTs['/customFields/{id}']['put']['req']): CancelablePromise<$OpenApiTs['/customFields/{id}']['put']['res'][200]>;
    /**
     * Delete a Custom Field definition
     * Delete a Custom Field from a board.
     * @param data The data for the request.
     * @param data.id ID of the Custom Field.
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteCustomfieldsId(data: $OpenApiTs['/customFields/{id}']['delete']['req']): CancelablePromise<$OpenApiTs['/customFields/{id}']['delete']['res'][200]>;
    /**
     * Add Option to Custom Field dropdown
     * Add an option to a dropdown Custom Field
     * @param data The data for the request.
     * @param data.id ID of the customfield.
     * @returns unknown Success
     * @throws ApiError
     */
    static getCustomfieldsIdOptions(data: $OpenApiTs['/customFields/{id}/options']['post']['req']): CancelablePromise<$OpenApiTs['/customFields/{id}/options']['post']['res'][200]>;
    /**
     * Get Options of Custom Field drop down
     * Get the options of a drop down Custom Field
     * @param data The data for the request.
     * @param data.id ID of the customfield.
     * @returns unknown Success
     * @throws ApiError
     */
    static postCustomfieldsIdOptions(data: $OpenApiTs['/customFields/{id}/options']['get']['req']): CancelablePromise<$OpenApiTs['/customFields/{id}/options']['get']['res'][200]>;
    /**
     * Get Option of Custom Field dropdown
     * Retrieve a specific, existing Option on a given dropdown-type Custom Field
     * @param data The data for the request.
     * @param data.id ID of the customfielditem.
     * @param data.idCustomFieldOption ID of the customfieldoption to retrieve.
     * @returns unknown Success
     * @throws ApiError
     */
    static getCustomfieldsOptionsIdcustomfieldoption(data: $OpenApiTs['/customFields/{id}/options/{idCustomFieldOption}']['get']['req']): CancelablePromise<$OpenApiTs['/customFields/{id}/options/{idCustomFieldOption}']['get']['res'][200]>;
    /**
     * Delete Option of Custom Field dropdown
     * Delete an option from a Custom Field dropdown.
     * @param data The data for the request.
     * @param data.id ID of the customfielditem.
     * @param data.idCustomFieldOption ID of the customfieldoption to retrieve.
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteCustomfieldsOptionsIdcustomfieldoption(data: $OpenApiTs['/customFields/{id}/options/{idCustomFieldOption}']['delete']['req']): CancelablePromise<$OpenApiTs['/customFields/{id}/options/{idCustomFieldOption}']['delete']['res'][200]>;
    /**
     * List available Emoji
     * List available Emoji
     * @param data The data for the request.
     * @param data.locale The locale to return emoji descriptions and names in. Defaults to the logged in member's locale.
     * @param data.spritesheets `true` to return spritesheet URLs in the response
     * @returns Emoji Success
     * @throws ApiError
     */
    static emoji(data?: $OpenApiTs['/emoji']['get']['req']): CancelablePromise<$OpenApiTs['/emoji']['get']['res'][200]>;
    /**
     * Get an Enterprise
     * Get an enterprise by its ID.
     * @param data The data for the request.
     * @param data.id ID of the enterprise to retrieve.
     * @param data.fields Comma-separated list of: `id`, `name`, `displayName`, `prefs`, `ssoActivationFailed`, `idAdmins`, `idMembers` (Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. Read the SCIM documentation [here]() for more information on filtering), `idOrganizations`, `products`, `userTypes`, `idMembers`, `idOrganizations`
     * @param data.members One of: `none`, `normal`, `admins`, `owners`, `all`
     * @param data.memberFields One of: `avatarHash`, `fullName`, `initials`, `username`
     * @param data.memberFilter Pass a [SCIM-style query](/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the member_* args are set, the member array will be paginated.
     * @param data.memberSort This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
     * @param data.memberSortBy Deprecated: Please use member_sort. This parameter expects a [SCIM-style sorting value](/cloud/trello/scim/). Note that the members array returned will be paginated if `members` is `normal` or `admins`. Pagination can be controlled with `member_startIndex`, etc, and the API response's header will contain the total count and pagination state.
     * @param data.memberSortOrder Deprecated: Please use member_sort. One of: `ascending`, `descending`, `asc`, `desc`
     * @param data.memberStartIndex Any integer between 0 and 100.
     * @param data.memberCount 0 to 100
     * @param data.organizations One of: `none`, `members`, `public`, `all`
     * @param data.organizationFields Any valid value that the [nested organization field resource]() accepts.
     * @param data.organizationPaidAccounts Whether or not to include paid account information in the returned workspace objects
     * @param data.organizationMemberships Comma-seperated list of: `me`, `normal`, `admin`, `active`, `deactivated`
     * @returns Enterprise Success
     * @throws ApiError
     */
    static getEnterprisesId(data: $OpenApiTs['/enterprises/{id}']['get']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}']['get']['res'][200]>;
    /**
     * Get auditlog data for an Enterprise
     * Returns an array of Actions related to the Enterprise object. Used for populating data sent to Google Sheets from an Enterprise's audit log page: https://trello.com/e/{enterprise_name}/admin/auditlog. An Enterprise admin token is required for this route.
     *
     * NOTE: For enterprises that have opted in to user management via AdminHub, the auditlog will will contain actions taken in AdminHub, but may not contain the source for those actions.
     * @param data The data for the request.
     * @param data.id ID of the enterprise to retrieve.
     * @returns EnterpriseAuditLog Success
     * @throws ApiError
     */
    static getEnterprisesIdAuditlog(data: $OpenApiTs['/enterprises/{id}/auditlog']['get']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/auditlog']['get']['res'][200]>;
    /**
     * Get Enterprise admin Members
     * Get an enterprise's admin members.
     * @param data The data for the request.
     * @param data.id ID of the enterprise to retrieve.
     * @param data.fields Any valid value that the [nested member field resource]() accepts.
     * @returns EnterpriseAdmin Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static getEnterprisesIdAdmins(data: $OpenApiTs['/enterprises/{id}/admins']['get']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/admins']['get']['res'][200] | $OpenApiTs['/enterprises/{id}/admins']['get']['res'][200]>;
    /**
     * Get signupUrl for Enterprise
     * Get the signup URL for an enterprise.
     * @param data The data for the request.
     * @param data.id ID of the enterprise to retrieve.
     * @param data.authenticate
     * @param data.confirmationAccepted
     * @param data.returnUrl Any valid URL.
     * @param data.tosAccepted Designates whether the user has seen/consented to the Trello ToS prior to being redirected to the enterprise signup page/their IdP.
     * @returns unknown Success
     * @throws ApiError
     */
    static getEnterprisesIdSignupurl(data: $OpenApiTs['/enterprises/{id}/signupUrl']['get']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/signupUrl']['get']['res'][200]>;
    /**
     * Get Users of an Enterprise
     * Get an enterprise's users. You can choose to retrieve licensed members, board guests, etc.
     * @param data The data for the request.
     * @param data.id ID of the enterprise to retrieve.
     * @param data.licensed When true, returns members who possess a license for the corresponding Trello Enterprise; when false, returns members who do not. If unspecified, both licensed and unlicensed members will be returned.
     * @param data.deactivated When true, returns members who have been deactivated for the corresponding Trello Enterprise; when false, returns members who have not. If unspecified, both active and deactivated members will be returned.
     * @param data.collaborator When true, returns members who are guests on one or more boards in the corresponding Trello Enterprise (but do not possess a license); when false, returns members who are not. If unspecified, both guests and non-guests will be returned.
     * @param data.managed When true, returns members who are managed by the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both managed and unmanaged members will be returned.
     * @param data.admin When true, returns members who are administrators of the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both admin and non-admin members will be returned.
     * @param data.activeSince Returns only Trello users active since this date (inclusive).
     * @param data.inactiveSince Returns only Trello users active since this date (inclusive).
     * @param data.search Returns members with email address or full name that start with the search value.
     * @param data.startIndex Cursor to return next set of results
     * @returns Membership Success
     * @throws ApiError
     */
    static getUsersId(data: $OpenApiTs['/enterprises/{id}/members/query']['get']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/members/query']['get']['res'][200]>;
    /**
     * Get Members of Enterprise
     * Get the members of an enterprise.
     * @param data The data for the request.
     * @param data.id ID of the Enterprise to retrieve.
     * @param data.fields A comma-seperated list of valid [member fields](/cloud/trello/guides/rest-api/object-definitions/#member-object).
     * @param data.filter Pass a [SCIM-style query](/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the below member_* args are set, the member array will be paginated.
     * @param data.sort This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
     * @param data.sortBy Deprecated: Please use `sort` instead. This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
     * @param data.sortOrder Deprecated: Please use `sort` instead. One of: `ascending`, `descending`, `asc`, `desc`.
     * @param data.startIndex Any integer between 0 and 9999.
     * @param data.count [SCIM-style filter](/cloud/trello/scim/).
     * @param data.organizationFields Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
     * @param data.boardFields Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
     * @returns Member Success
     * @throws ApiError
     */
    static getEnterprisesIdMembers(data: $OpenApiTs['/enterprises/{id}/members']['get']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/members']['get']['res'][200]>;
    /**
     * Get a Member of Enterprise
     * Get a specific member of an enterprise by ID.
     * @param data The data for the request.
     * @param data.id ID of the enterprise to retrieve.
     * @param data.idMember An ID of a member resource.
     * @param data.fields A comma separated list of any valid values that the [nested member field resource]() accepts.
     * @param data.organizationFields Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
     * @param data.boardFields Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
     * @returns Member Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static getEnterprisesIdMembersIdmember(data: $OpenApiTs['/enterprises/{id}/members/{idMember}']['get']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/members/{idMember}']['get']['res'][200] | $OpenApiTs['/enterprises/{id}/members/{idMember}']['get']['res'][200]>;
    /**
     * Get whether an organization can be transferred to an enterprise.
     * Get whether an organization can be transferred to an enterprise.
     * @param data The data for the request.
     * @param data.id ID of the Enterprise to retrieve.
     * @param data.idOrganization An ID of an Organization resource.
     * @returns TransferrableOrganization Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static getEnterprisesIdTransferrableOrganizationIdOrganization(data: $OpenApiTs['/enterprises/{id}/transferrable/organization/{idOrganization}']['get']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/transferrable/organization/{idOrganization}']['get']['res'][200] | $OpenApiTs['/enterprises/{id}/transferrable/organization/{idOrganization}']['get']['res'][200]>;
    /**
     * Get a bulk list of organizations that can be transferred to an enterprise.
     * Get a list of organizations that can be transferred to an enterprise when given a bulk list of organizations.
     * @param data The data for the request.
     * @param data.id ID of the Enterprise to retrieve.
     * @param data.idOrganizations An array of IDs of an Organization resource.
     * @returns unknown Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static getEnterprisesIdTransferrableBulkIdOrganizations(data: $OpenApiTs['/enterprises/{id}/transferrable/bulk/{idOrganizations}']['get']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/transferrable/bulk/{idOrganizations}']['get']['res'][200] | $OpenApiTs['/enterprises/{id}/transferrable/bulk/{idOrganizations}']['get']['res'][200]>;
    /**
     * Decline enterpriseJoinRequests from one organization or a bulk list of organizations.
     * Decline enterpriseJoinRequests from one organization or bulk amount of organizations
     * @param data The data for the request.
     * @param data.id ID of the Enterprise to retrieve.
     * @param data.idOrganizations An array of IDs of an Organization resource.
     * @returns unknown Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static putEnterprisesIdEnterpriseJoinRequestBulk(data: $OpenApiTs['/enterprises/${id}/enterpriseJoinRequest/bulk']['put']['req']): CancelablePromise<$OpenApiTs['/enterprises/${id}/enterpriseJoinRequest/bulk']['put']['res'][200] | $OpenApiTs['/enterprises/${id}/enterpriseJoinRequest/bulk']['put']['res'][200]>;
    /**
     * Get ClaimableOrganizations of an Enterprise
     * Get the Workspaces that are claimable by the enterprise by ID. Can optionally query for workspaces based on activeness/ inactiveness.
     * @param data The data for the request.
     * @param data.id ID of the enterprise to retrieve
     * @param data.limit Limits the number of workspaces to be sorted
     * @param data.cursor Specifies the sort order to return matching documents
     * @param data.name Name of the enterprise to retrieve workspaces for
     * @param data.activeSince Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace
     * @param data.inactiveSince Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace
     * @returns ClaimableOrganizations Success
     * @returns Error Unexpected erorr
     * @throws ApiError
     */
    static getEnterprisesIdClaimableOrganizations(data: $OpenApiTs['/enterprises/{id}/claimableOrganizations']['get']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/claimableOrganizations']['get']['res'][200] | $OpenApiTs['/enterprises/{id}/claimableOrganizations']['get']['res'][200]>;
    /**
     * Get PendingOrganizations of an Enterprise
     * Get the Workspaces that are pending for the enterprise by ID.
     * @param data The data for the request.
     * @param data.id ID of the enterprise to retrieve
     * @param data.activeSince Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace
     * @param data.inactiveSince Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace
     * @returns PendingOrganizations Success
     * @returns Error Unexpected erorr
     * @throws ApiError
     */
    static getEnterprisesIdPendingOrganizations(data: $OpenApiTs['/enterprises/{id}/pendingOrganizations']['get']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/pendingOrganizations']['get']['res'][200] | $OpenApiTs['/enterprises/{id}/pendingOrganizations']['get']['res'][200]>;
    /**
     * Create an auth Token for an Enterprise.
     * Create an auth Token for an Enterprise.
     * @param data The data for the request.
     * @param data.id ID of the enterprise to retrieve.
     * @param data.expiration One of: `1hour`, `1day`, `30days`, `never`
     * @returns unknown Success
     * @throws ApiError
     */
    static postEnterprisesIdTokens(data: $OpenApiTs['/enterprises/{id}/tokens']['post']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/tokens']['post']['res'][200]>;
    /**
     * Transfer an Organization to an Enterprise.
     * Transfer an organization to an enterprise.
     *
     * NOTE: For enterprises that have opted in to user management via AdminHub, this endpoint will result in the organization being added to the enterprise asynchronously. A 200 response only indicates receipt of the request, it does not indicate successful addition to the enterprise.
     * @param data The data for the request.
     * @param data.id ID of the Enterprise to retrieve.
     * @param data.idOrganization ID of Organization to be transferred to Enterprise.
     * @returns unknown Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static putEnterprisesIdOrganizations(data: $OpenApiTs['/enterprises/{id}/organizations']['put']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/organizations']['put']['res'][200] | $OpenApiTs['/enterprises/{id}/organizations']['put']['res'][200]>;
    /**
     * Update a Member's licensed status
     * This endpoint is used to update whether the provided Member should use one of the Enterprise's available licenses or not. Revoking a license will deactivate a Member of an Enterprise.
     *
     * NOTE: Revoking of licenses is not possible for enterprises that have opted in to user management via AdminHub.
     * @param data The data for the request.
     * @param data.id ID of the Enterprise.
     * @param data.idMember The ID of the Member
     * @param data.value Boolean value to determine whether the user should be given an Enterprise license (true) or not (false).
     * @returns Member Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static putEnterprisesIdMembersIdmemberLicensed(data: $OpenApiTs['/enterprises/{id}/members/{idMember}/licensed']['put']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/members/{idMember}/licensed']['put']['res'][200] | $OpenApiTs['/enterprises/{id}/members/{idMember}/licensed']['put']['res'][200]>;
    /**
     * Deactivate a Member of an Enterprise.
     * Deactivate a Member of an Enterprise.
     *
     * NOTE: Deactivation is not possible for enterprises that have opted in to user management via AdminHub.
     * @param data The data for the request.
     * @param data.id ID of the enterprise to retrieve.
     * @param data.idMember ID of the Member to deactive.
     * @param data.value Determines whether the user is deactivated or not.
     * @param data.fields A comma separated list of any valid values that the [nested member field resource]() accepts.
     * @param data.organizationFields Any valid value that the [nested organization resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
     * @param data.boardFields Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
     * @returns unknown Success
     * @throws ApiError
     */
    static enterprisesIdMembersIdMemberDeactivated(data: $OpenApiTs['/enterprises/{id}/members/{idMember}/deactivated']['put']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/members/{idMember}/deactivated']['put']['res'][200]>;
    /**
     * Update Member to be admin of Enterprise
     * Make Member an admin of Enterprise.
     *
     * NOTE: This endpoint is not available to enterprises that have opted in to user management via AdminHub.
     * @param data The data for the request.
     * @param data.id ID of the enterprise to retrieve.
     * @param data.idMember ID of member to be made an admin of enterprise.
     * @returns unknown Success
     * @throws ApiError
     */
    static putEnterprisesIdAdminsIdmember(data: $OpenApiTs['/enterprises/{id}/admins/{idMember}']['put']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/admins/{idMember}']['put']['res'][200]>;
    /**
     * Remove a Member as admin from Enterprise.
     * Remove a member as admin from an enterprise.
     *
     * NOTE: This endpoint is not available to enterprises that have opted in to user management via AdminHub.
     * @param data The data for the request.
     * @param data.id ID of the Enterprise to retrieve.
     * @param data.idMember ID of the member to be removed as an admin from enterprise.
     * @returns unknown Success
     * @throws ApiError
     */
    static enterprisesIdOrganizationsIdmember(data: $OpenApiTs['/enterprises/{id}/admins/{idMember}']['delete']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/admins/{idMember}']['delete']['res'][200]>;
    /**
     * Delete an Organization from an Enterprise.
     * Remove an organization from an enterprise.
     * @param data The data for the request.
     * @param data.id ID of the enterprise to retrieve.
     * @param data.idOrg ID of the organization to be removed from the enterprise.
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteEnterprisesIdOrganizationsIdorg(data: $OpenApiTs['/enterprises/{id}/organizations/{idOrg}']['delete']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/organizations/{idOrg}']['delete']['res'][200]>;
    /**
     * Bulk accept a set of organizations to an Enterprise.
     * Accept an array of organizations to an enterprise.
     *
     * NOTE: For enterprises that have opted in to user management via AdminHub, this endpoint will result in organizations being added to the enterprise asynchronously. A 200 response only indicates receipt of the request, it does not indicate successful addition to the enterprise.
     * @param data The data for the request.
     * @param data.id ID of the enterprise to retrieve.
     * @param data.idOrganizations An array of IDs of the organizations to be removed from the enterprise.
     * @returns unknown Success
     * @returns Error Unexpected Error
     * @throws ApiError
     */
    static getEnterprisesIdOrganizationsBulkIdOrganizations(data: $OpenApiTs['/enterprises/{id}/organizations/bulk/{idOrganizations}']['get']['req']): CancelablePromise<$OpenApiTs['/enterprises/{id}/organizations/bulk/{idOrganizations}']['get']['res'][200] | $OpenApiTs['/enterprises/{id}/organizations/bulk/{idOrganizations}']['get']['res'][200]>;
    /**
     * Get a Label
     * Get information about a single Label.
     * @param data The data for the request.
     * @param data.id The ID of the Label
     * @param data.fields all or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getLabelsId(data: $OpenApiTs['/labels/{id}']['get']['req']): CancelablePromise<$OpenApiTs['/labels/{id}']['get']['res'][200]>;
    /**
     * Update a Label
     * Update a label by ID.
     * @param data The data for the request.
     * @param data.id The ID of the Label
     * @param data.name The new name for the label
     * @param data.color The new color for the label. See: [fields](/cloud/trello/guides/rest-api/object-definitions/) for color options
     * @returns unknown Success
     * @throws ApiError
     */
    static putLabelsId(data: $OpenApiTs['/labels/{id}']['put']['req']): CancelablePromise<$OpenApiTs['/labels/{id}']['put']['res'][200]>;
    /**
     * Delete a Label
     * Delete a label by ID.
     * @param data The data for the request.
     * @param data.id The ID of the Label
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteLabelsId(data: $OpenApiTs['/labels/{id}']['delete']['req']): CancelablePromise<$OpenApiTs['/labels/{id}']['delete']['res'][200]>;
    /**
     * Update a field on a label
     * Update a field on a label.
     * @param data The data for the request.
     * @param data.id The id of the label
     * @param data.field The field on the Label to update.
     * @param data.value The new value for the field.
     * @returns unknown Success
     * @throws ApiError
     */
    static putLabelsIdField(data: $OpenApiTs['/labels/{id}/{field}']['put']['req']): CancelablePromise<$OpenApiTs['/labels/{id}/{field}']['put']['res'][200]>;
    /**
     * Create a Label
     * Create a new Label on a Board.
     * @param data The data for the request.
     * @param data.name Name for the label
     * @param data.color The color for the label.
     * @param data.idBoard The ID of the Board to create the Label on.
     * @returns unknown Success
     * @throws ApiError
     */
    static postLabels(data: $OpenApiTs['/labels']['post']['req']): CancelablePromise<$OpenApiTs['/labels']['post']['res'][200]>;
    /**
     * Get a List
     * Get information about a List
     * @param data The data for the request.
     * @param data.id The ID of the list
     * @param data.fields `all` or a comma separated list of List field names.
     * @returns unknown Success
     * @throws ApiError
     */
    static getListsId(data: $OpenApiTs['/lists/{id}']['get']['req']): CancelablePromise<$OpenApiTs['/lists/{id}']['get']['res'][200]>;
    /**
     * Update a List
     * Update the properties of a List
     * @param data The data for the request.
     * @param data.id The ID of the list
     * @param data.name New name for the list
     * @param data.closed Whether the list should be closed (archived)
     * @param data.idBoard ID of a board the list should be moved to
     * @param data.pos New position for the list: `top`, `bottom`, or a positive floating point number
     * @param data.subscribed Whether the active member is subscribed to this list
     * @returns unknown Success
     * @throws ApiError
     */
    static putListsId(data: $OpenApiTs['/lists/{id}']['put']['req']): CancelablePromise<$OpenApiTs['/lists/{id}']['put']['res'][200]>;
    /**
     * Create a new List
     * Create a new List on a Board
     * @param data The data for the request.
     * @param data.name Name for the list
     * @param data.idBoard The long ID of the board the list should be created on
     * @param data.idListSource ID of the List to copy into the new List
     * @param data.pos Position of the list. `top`, `bottom`, or a positive floating point number
     * @returns unknown Success
     * @throws ApiError
     */
    static postLists(data: $OpenApiTs['/lists']['post']['req']): CancelablePromise<$OpenApiTs['/lists']['post']['res'][200]>;
    /**
     * Archive all Cards in List
     * Archive all cards in a list
     * @param data The data for the request.
     * @param data.id The ID of the list
     * @returns unknown Success
     * @throws ApiError
     */
    static postListsIdArchiveallcards(data: $OpenApiTs['/lists/{id}/archiveAllCards']['post']['req']): CancelablePromise<$OpenApiTs['/lists/{id}/archiveAllCards']['post']['res'][200]>;
    /**
     * Move all Cards in List
     * Move all Cards in a List
     * @param data The data for the request.
     * @param data.id The ID of the list
     * @param data.idBoard The ID of the board the cards should be moved to
     * @param data.idList The ID of the list that the cards should be moved to
     * @returns unknown Success
     * @throws ApiError
     */
    static postListsIdMoveallcards(data: $OpenApiTs['/lists/{id}/moveAllCards']['post']['req']): CancelablePromise<$OpenApiTs['/lists/{id}/moveAllCards']['post']['res'][200]>;
    /**
     * Archive or unarchive a list
     * Archive or unarchive a list
     * @param data The data for the request.
     * @param data.id The ID of the list
     * @param data.value Set to true to close (archive) the list
     * @returns unknown Success
     * @throws ApiError
     */
    static putListsIdClosed(data: $OpenApiTs['/lists/{id}/closed']['put']['req']): CancelablePromise<$OpenApiTs['/lists/{id}/closed']['put']['res'][200]>;
    /**
     * Move List to Board
     * Move a List to a different Board
     * @param data The data for the request.
     * @param data.id The ID of the list
     * @param data.value The ID of the board to move the list to
     * @returns unknown Success
     * @throws ApiError
     */
    static putIdIdboard(data: $OpenApiTs['/lists/{id}/idBoard']['put']['req']): CancelablePromise<$OpenApiTs['/lists/{id}/idBoard']['put']['res'][200]>;
    /**
     * Update a field on a List
     * Rename a list
     * @param data The data for the request.
     * @param data.id The ID of the list
     * @param data.field The field on the List to be updated
     * @param data.value The new value for the field
     * @returns unknown Success
     * @throws ApiError
     */
    static putListsIdField(data: $OpenApiTs['/lists/{id}/{field}']['put']['req']): CancelablePromise<$OpenApiTs['/lists/{id}/{field}']['put']['res'][200]>;
    /**
     * Get Actions for a List
     * Get the Actions on a List
     * @param data The data for the request.
     * @param data.id The ID of the list
     * @param data.filter A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
     * @returns unknown Success
     * @throws ApiError
     */
    static getListsIdActions(data: $OpenApiTs['/lists/{id}/actions']['get']['req']): CancelablePromise<$OpenApiTs['/lists/{id}/actions']['get']['res'][200]>;
    /**
     * Get the Board a List is on
     * Get the board a list is on
     * @param data The data for the request.
     * @param data.id The ID of the list
     * @param data.fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object)
     * @returns unknown Success
     * @throws ApiError
     */
    static getListsIdBoard(data: $OpenApiTs['/lists/{id}/board']['get']['req']): CancelablePromise<$OpenApiTs['/lists/{id}/board']['get']['res'][200]>;
    /**
     * Get Cards in a List
     * List the cards in a list
     * @param data The data for the request.
     * @param data.id The ID of the list
     * @returns Card Success
     * @throws ApiError
     */
    static getListsIdCards(data: $OpenApiTs['/lists/{id}/cards']['get']['req']): CancelablePromise<$OpenApiTs['/lists/{id}/cards']['get']['res'][200]>;
    /**
     * Get a Member
     * Get a member
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.actions See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)
     * @param data.boards See the [Boards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#boards-nested-resource)
     * @param data.boardBackgrounds One of: `all`, `custom`, `default`, `none`, `premium`
     * @param data.boardsInvited `all` or a comma-separated list of: closed, members, open, organization, pinned, public, starred, unpinned
     * @param data.boardsInvitedFields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param data.boardStars Whether to return the boardStars or not
     * @param data.cards See the [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource) for additional options
     * @param data.customBoardBackgrounds `all` or `none`
     * @param data.customEmoji `all` or `none`
     * @param data.customStickers `all` or `none`
     * @param data.fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param data.notifications See the [Notifications Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#notifications-nested-resource)
     * @param data.organizations One of: `all`, `members`, `none`, `public`
     * @param data.organizationFields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param data.organizationPaidAccount Whether or not to include paid account information in the returned workspace object
     * @param data.organizationsInvited One of: `all`, `members`, `none`, `public`
     * @param data.organizationsInvitedFields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param data.paidAccount Whether or not to include paid account information in the returned member object
     * @param data.savedSearches
     * @param data.tokens `all` or `none`
     * @returns unknown Success
     * @throws ApiError
     */
    static getMembersId(data: $OpenApiTs['/members/{id}']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}']['get']['res'][200]>;
    /**
     * Update a Member
     * Update a Member
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.fullName New name for the member. Cannot begin or end with a space.
     * @param data.initials New initials for the member. 1-4 characters long.
     * @param data.username New username for the member. At least 3 characters long, only lowercase letters, underscores, and numbers. Must be unique.
     * @param data.bio
     * @param data.avatarSource One of: `gravatar`, `none`, `upload`
     * @param data.prefsColorBlind
     * @param data.prefsLocale
     * @param data.prefsMinutesBetweenSummaries `-1` for disabled, `1`, or `60`
     * @returns unknown Success
     * @throws ApiError
     */
    static putMembersId(data: $OpenApiTs['/members/{id}']['put']['req']): CancelablePromise<$OpenApiTs['/members/{id}']['put']['res'][200]>;
    /**
     * Get a field on a Member
     * Get a particular property of a member
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.field One of the member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getMembersIdField(data: $OpenApiTs['/members/{id}/{field}']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/{field}']['get']['res'][200]>;
    /**
     * Get a Member's Actions
     * List the actions for a member
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.filter A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
     * @returns unknown Success
     * @throws ApiError
     */
    static getMembersIdActions(data: $OpenApiTs['/members/{id}/actions']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/actions']['get']['res'][200]>;
    /**
     * Get Member's custom Board backgrounds
     * Get a member's custom board backgrounds
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.filter One of: `all`, `custom`, `default`, `none`, `premium`
     * @returns unknown Success
     * @throws ApiError
     */
    static getMembersIdBoardbackgrounds(data: $OpenApiTs['/members/{id}/boardBackgrounds']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/boardBackgrounds']['get']['res'][200]>;
    /**
     * Upload new boardBackground for Member
     * Upload a new boardBackground
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.file
     * @returns unknown Success
     * @throws ApiError
     */
    static postMembersIdBoardbackgrounds1(data: $OpenApiTs['/members/{id}/boardBackgrounds']['post']['req']): CancelablePromise<$OpenApiTs['/members/{id}/boardBackgrounds']['post']['res'][200]>;
    /**
     * Get a boardBackground of a Member
     * Get a member's board background
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.idBackground The ID of the board background
     * @param data.fields `all` or a comma-separated list of: `brightness`, `fullSizeUrl`, `scaled`, `tile`
     * @returns BoardBackground Success
     * @throws ApiError
     */
    static getMembersIdBoardbackgroundsIdbackground(data: $OpenApiTs['/members/{id}/boardBackgrounds/{idBackground}']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/boardBackgrounds/{idBackground}']['get']['res'][200]>;
    /**
     * Update a Member's custom Board background
     * Update a board background
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.idBackground The ID of the board background
     * @param data.brightness One of: `dark`, `light`, `unknown`
     * @param data.tile Whether the background should be tiled
     * @returns BoardBackground Success
     * @throws ApiError
     */
    static putMembersIdBoardbackgroundsIdbackground(data: $OpenApiTs['/members/{id}/boardBackgrounds/{idBackground}']['put']['req']): CancelablePromise<$OpenApiTs['/members/{id}/boardBackgrounds/{idBackground}']['put']['res'][200]>;
    /**
     * Delete a Member's custom Board background
     * Delete a board background
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.idBackground The ID of the board background
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteMembersIdBoardbackgroundsIdbackground(data: $OpenApiTs['/members/{id}/boardBackgrounds/{idBackground}']['delete']['req']): CancelablePromise<$OpenApiTs['/members/{id}/boardBackgrounds/{idBackground}']['delete']['res'][200]>;
    /**
     * Get a Member's boardStars
     * List a member's board stars
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @returns unknown Success
     * @throws ApiError
     */
    static getMembersIdBoardstars(data: $OpenApiTs['/members/{id}/boardStars']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/boardStars']['get']['res'][200]>;
    /**
     * Create Star for Board
     * Star a new board on behalf of a Member
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.idBoard The ID of the board to star
     * @param data.pos The position of the newly starred board. `top`, `bottom`, or a positive float.
     * @returns BoardStars Success
     * @throws ApiError
     */
    static postMembersIdBoardstars(data: $OpenApiTs['/members/{id}/boardStars']['post']['req']): CancelablePromise<$OpenApiTs['/members/{id}/boardStars']['post']['res'][200]>;
    /**
     * Get a boardStar of Member
     * Get a specific boardStar
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.idStar The ID of the board star
     * @returns BoardStars Success
     * @throws ApiError
     */
    static getMembersIdBoardstarsIdstar(data: $OpenApiTs['/members/{id}/boardStars/{idStar}']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/boardStars/{idStar}']['get']['res'][200]>;
    /**
     * Update the position of a boardStar of Member
     * Update the position of a starred board
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.idStar The ID of the board star
     * @param data.pos New position for the starred board. `top`, `bottom`, or a positive float.
     * @returns unknown Success
     * @throws ApiError
     */
    static putMembersIdBoardstarsIdstar(data: $OpenApiTs['/members/{id}/boardStars/{idStar}']['put']['req']): CancelablePromise<$OpenApiTs['/members/{id}/boardStars/{idStar}']['put']['res'][200]>;
    /**
     * Delete Star for Board
     * Unstar a board
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.idStar The ID of the board star
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteMembersIdBoardstarsIdstar(data: $OpenApiTs['/members/{id}/boardStars/{idStar}']['delete']['req']): CancelablePromise<$OpenApiTs['/members/{id}/boardStars/{idStar}']['delete']['res'][200]>;
    /**
     * Get Boards that Member belongs to
     * Lists the boards that the user is a member of.
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.filter `all` or a comma-separated list of: `closed`, `members`, `open`, `organization`, `public`, `starred`
     * @param data.fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param data.lists Which lists to include with the boards. One of: `all`, `closed`, `none`, `open`
     * @param data.organization Whether to include the Organization object with the Boards
     * @param data.organizationFields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns Board Success
     * @throws ApiError
     */
    static getMembersIdBoards(data: $OpenApiTs['/members/{id}/boards']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/boards']['get']['res'][200]>;
    /**
     * Get Boards the Member has been invited to
     * Get the boards the member has been invited to
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns Board Success
     * @throws ApiError
     */
    static getMembersIdBoardsinvited(data: $OpenApiTs['/members/{id}/boardsInvited']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/boardsInvited']['get']['res'][200]>;
    /**
     * Get Cards the Member is on
     * Gets the cards a member is on
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.filter One of: `all`, `closed`, `none`, `open`, `visible`
     * @returns Card Success
     * @throws ApiError
     */
    static getMembersIdCards(data: $OpenApiTs['/members/{id}/cards']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/cards']['get']['res'][200]>;
    /**
     * Get a Member's custom Board Backgrounds
     * Get a member's custom board backgrounds
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @returns BoardBackground Success
     * @throws ApiError
     */
    static getMembersIdCustomboardbackgrounds(data: $OpenApiTs['/members/{id}/customBoardBackgrounds']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/customBoardBackgrounds']['get']['res'][200]>;
    /**
     * Create a new custom Board Background
     * Upload a new custom board background
     * @param data The data for the request.
     * @param data.file
     * @param data.id The ID or username of the member
     * @returns BoardBackground Success
     * @throws ApiError
     */
    static membersidcustomboardbackgrounds1(data: $OpenApiTs['/members/{id}/customBoardBackgrounds']['post']['req']): CancelablePromise<$OpenApiTs['/members/{id}/customBoardBackgrounds']['post']['res'][200]>;
    /**
     * Get custom Board Background of Member
     * Get a specific custom board background
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.idBackground The ID of the custom background
     * @returns BoardBackground Success
     * @throws ApiError
     */
    static getMembersIdCustomboardbackgroundsIdbackground(data: $OpenApiTs['/members/{id}/customBoardBackgrounds/{idBackground}']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/customBoardBackgrounds/{idBackground}']['get']['res'][200]>;
    /**
     * Update custom Board Background of Member
     * Update a specific custom board background
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.idBackground The ID of the custom background
     * @param data.brightness One of: `dark`, `light`, `unknown`
     * @param data.tile Whether to tile the background
     * @returns BoardBackground Success
     * @throws ApiError
     */
    static putMembersIdCustomboardbackgroundsIdbackground(data: $OpenApiTs['/members/{id}/customBoardBackgrounds/{idBackground}']['put']['req']): CancelablePromise<$OpenApiTs['/members/{id}/customBoardBackgrounds/{idBackground}']['put']['res'][200]>;
    /**
     * Delete custom Board Background of Member
     * Delete a specific custom board background
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.idBackground The ID of the custom background
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteMembersIdCustomboardbackgroundsIdbackground(data: $OpenApiTs['/members/{id}/customBoardBackgrounds/{idBackground}']['delete']['req']): CancelablePromise<$OpenApiTs['/members/{id}/customBoardBackgrounds/{idBackground}']['delete']['res'][200]>;
    /**
     * Get a Member's customEmojis
     * Get a Member's uploaded custom Emojis
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @returns CustomEmoji Success
     * @throws ApiError
     */
    static getMembersIdCustomemoji(data: $OpenApiTs['/members/{id}/customEmoji']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/customEmoji']['get']['res'][200]>;
    /**
     * Create custom Emoji for Member
     * Create a new custom Emoji
     * @param data The data for the request.
     * @param data.file
     * @param data.name Name for the emoji. 2 - 64 characters
     * @param data.id The ID or username of the member
     * @returns CustomEmoji Success
     * @throws ApiError
     */
    static postMembersIdCustomemoji(data: $OpenApiTs['/members/{id}/customEmoji']['post']['req']): CancelablePromise<$OpenApiTs['/members/{id}/customEmoji']['post']['res'][200]>;
    /**
     * Get a Member's custom Emoji
     * Get a Member's custom Emoji
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.idEmoji The ID of the custom emoji
     * @param data.fields `all` or a comma-separated list of `name`, `url`
     * @returns CustomEmoji Success
     * @throws ApiError
     */
    static membersidcustomemojiidemoji(data: $OpenApiTs['/members/{id}/customEmoji/{idEmoji}']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/customEmoji/{idEmoji}']['get']['res'][200]>;
    /**
     * Get Member's custom Stickers
     * Get a Member's uploaded stickers
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @returns CustomSticker Success
     * @throws ApiError
     */
    static getMembersIdCustomstickers(data: $OpenApiTs['/members/{id}/customStickers']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/customStickers']['get']['res'][200]>;
    /**
     * Create custom Sticker for Member
     * Upload a new custom sticker
     * @param data The data for the request.
     * @param data.file
     * @param data.id The ID or username of the member
     * @returns CustomSticker Success
     * @throws ApiError
     */
    static postMembersIdCustomstickers(data: $OpenApiTs['/members/{id}/customStickers']['post']['req']): CancelablePromise<$OpenApiTs['/members/{id}/customStickers']['post']['res'][200]>;
    /**
     * Get a Member's custom Sticker
     * Get a Member's custom Sticker
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.idSticker The ID of the uploaded sticker
     * @param data.fields `all` or a comma-separated list of `scaled`, `url`
     * @returns CustomSticker Success
     * @throws ApiError
     */
    static getMembersIdCustomstickersIdsticker(data: $OpenApiTs['/members/{id}/customStickers/{idSticker}']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/customStickers/{idSticker}']['get']['res'][200]>;
    /**
     * Delete a Member's custom Sticker
     * Delete a Member's custom Sticker
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.idSticker The ID of the uploaded sticker
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteMembersIdCustomstickersIdsticker(data: $OpenApiTs['/members/{id}/customStickers/{idSticker}']['delete']['req']): CancelablePromise<$OpenApiTs['/members/{id}/customStickers/{idSticker}']['delete']['res'][200]>;
    /**
     * Get Member's Notifications
     * Get a member's notifications
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.entities
     * @param data.display
     * @param data.filter
     * @param data.readFilter One of: `all`, `read`, `unread`
     * @param data.fields `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param data.limit Max 1000
     * @param data.page Max 100
     * @param data.before A notification ID
     * @param data.since A notification ID
     * @param data.memberCreator
     * @param data.memberCreatorFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns Notification Success
     * @throws ApiError
     */
    static getMembersIdNotifications(data: $OpenApiTs['/members/{id}/notifications']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/notifications']['get']['res'][200]>;
    /**
     * Get Member's Organizations
     * Get a member's Workspaces
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.filter One of: `all`, `members`, `none`, `public` (Note: `members` filters to only private Workspaces)
     * @param data.fields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param data.paidAccount Whether or not to include paid account information in the returned workspace object
     * @returns Organization Success
     * @throws ApiError
     */
    static getMembersIdOrganizations(data: $OpenApiTs['/members/{id}/organizations']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/organizations']['get']['res'][200]>;
    /**
     * Get Organizations a Member has been invited to
     * Get a member's Workspaces they have been invited to
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.fields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns Organization Success
     * @throws ApiError
     */
    static getMembersIdOrganizationsinvited(data: $OpenApiTs['/members/{id}/organizationsInvited']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/organizationsInvited']['get']['res'][200]>;
    /**
     * Get Member's saved searched
     * List the saved searches of a Member
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @returns SavedSearch Success
     * @throws ApiError
     */
    static getMembersIdSavedsearches(data: $OpenApiTs['/members/{id}/savedSearches']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/savedSearches']['get']['res'][200]>;
    /**
     * Create saved Search for Member
     * Create a saved search
     * @param data The data for the request.
     * @param data.name The name for the saved search
     * @param data.query The search query
     * @param data.pos The position of the saved search. `top`, `bottom`, or a positive float.
     * @param data.id The ID or username of the member
     * @returns SavedSearch Success
     * @throws ApiError
     */
    static postMembersIdSavedsearches(data: $OpenApiTs['/members/{id}/savedSearches']['post']['req']): CancelablePromise<$OpenApiTs['/members/{id}/savedSearches']['post']['res'][200]>;
    /**
     * Get a saved search
     * Get a saved search
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.idSearch The ID of the saved search to delete
     * @returns SavedSearch Success
     * @throws ApiError
     */
    static getMembersIdSavedsearchesIdsearch(data: $OpenApiTs['/members/{id}/savedSearches/{idSearch}']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/savedSearches/{idSearch}']['get']['res'][200]>;
    /**
     * Update a saved search
     * Update a saved search
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.idSearch The ID of the saved search to delete
     * @param data.name The new name for the saved search
     * @param data.query The new search query
     * @param data.pos New position for saves search. `top`, `bottom`, or a positive float.
     * @returns SavedSearch Success
     * @throws ApiError
     */
    static putMembersIdSavedsearchesIdsearch(data: $OpenApiTs['/members/{id}/savedSearches/{idSearch}']['put']['req']): CancelablePromise<$OpenApiTs['/members/{id}/savedSearches/{idSearch}']['put']['res'][200]>;
    /**
     * Delete a saved search
     * Delete a saved search
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.idSearch The ID of the saved search to delete
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteMembersIdSavedsearchesIdsearch(data: $OpenApiTs['/members/{id}/savedSearches/{idSearch}']['delete']['req']): CancelablePromise<$OpenApiTs['/members/{id}/savedSearches/{idSearch}']['delete']['res'][200]>;
    /**
     * Get Member's Tokens
     * List a members app tokens
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.webhooks Whether to include webhooks
     * @returns Token Success
     * @throws ApiError
     */
    static getMembersIdTokens(data: $OpenApiTs['/members/{id}/tokens']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/tokens']['get']['res'][200]>;
    /**
     * Create Avatar for Member
     * Create a new avatar for a member
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.file
     * @returns unknown Success
     * @throws ApiError
     */
    static membersidavatar(data: $OpenApiTs['/members/{id}/avatar']['post']['req']): CancelablePromise<$OpenApiTs['/members/{id}/avatar']['post']['res'][200]>;
    /**
     * Dismiss a message for Member
     * Dismiss a message
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.value The message to dismiss
     * @returns unknown Success
     * @throws ApiError
     */
    static postMembersIdOnetimemessagesdismissed(data: $OpenApiTs['/members/{id}/oneTimeMessagesDismissed']['post']['req']): CancelablePromise<$OpenApiTs['/members/{id}/oneTimeMessagesDismissed']['post']['res'][200]>;
    /**
     * Get a Member's notification channel settings
     * Get a member's notification channel settings
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @returns NotificationChannelSettings Success
     * @throws ApiError
     */
    static getMembersIdNotificationChannelSettings(data: $OpenApiTs['/members/{id}/notificationsChannelSettings']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/notificationsChannelSettings']['get']['res'][200]>;
    /**
     * Update blocked notification keys of Member on a channel
     * Update blocked notification keys of Member on a specific channel
     * @param data The data for the request.
     * @param data.requestBody
     * @param data.id The ID or username of the member
     * @returns NotificationChannelSettings Success
     * @throws ApiError
     */
    static putMembersIdNotificationChannelSettingsChannelBlockedKeys(data: $OpenApiTs['/members/{id}/notificationsChannelSettings']['put']['req']): CancelablePromise<$OpenApiTs['/members/{id}/notificationsChannelSettings']['put']['res'][200]>;
    /**
     * Get blocked notification keys of Member on this channel
     * Get blocked notification keys of Member on a specific channel
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.channel Channel to block notifications on
     * @returns NotificationChannelSettings Success
     * @throws ApiError
     */
    static getMembersIdNotificationChannelSettingsChannel(data: $OpenApiTs['/members/{id}/notificationsChannelSettings/{channel}']['get']['req']): CancelablePromise<$OpenApiTs['/members/{id}/notificationsChannelSettings/{channel}']['get']['res'][200]>;
    /**
     * Update blocked notification keys of Member on a channel
     * Update blocked notification keys of Member on a specific channel
     * @param data The data for the request.
     * @param data.requestBody
     * @param data.id The ID or username of the member
     * @param data.channel Channel to block notifications on
     * @returns NotificationChannelSettings Success
     * @throws ApiError
     */
    static putMembersIdNotificationChannelSettingsChannelBlockedKeys1(data: $OpenApiTs['/members/{id}/notificationsChannelSettings/{channel}']['put']['req']): CancelablePromise<$OpenApiTs['/members/{id}/notificationsChannelSettings/{channel}']['put']['res'][200]>;
    /**
     * Update blocked notification keys of Member on a channel
     * Update blocked notification keys of Member on a specific channel
     * @param data The data for the request.
     * @param data.id The ID or username of the member
     * @param data.channel Channel to block notifications on
     * @param data.blockedKeys Singular key or comma-separated list of notification keys
     * @returns NotificationChannelSettings Success
     * @throws ApiError
     */
    static putMembersIdNotificationChannelSettingsChannelBlockedKeys2(data: $OpenApiTs['/members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}']['put']['req']): CancelablePromise<$OpenApiTs['/members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}']['put']['res'][200]>;
    /**
     * Get a Notification
     * @param data The data for the request.
     * @param data.id The ID of the notification
     * @param data.board Whether to include the board object
     * @param data.boardFields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param data.card Whether to include the card object
     * @param data.cardFields `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param data.display Whether to include the display object with the results
     * @param data.entities Whether to include the entities object with the results
     * @param data.fields `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param data.list Whether to include the list object
     * @param data.member Whether to include the member object
     * @param data.memberFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param data.memberCreator Whether to include the member object of the creator
     * @param data.memberCreatorFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param data.organization Whether to include the organization object
     * @param data.organizationFields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getNotificationsId(data: $OpenApiTs['/notifications/{id}']['get']['req']): CancelablePromise<$OpenApiTs['/notifications/{id}']['get']['res'][200]>;
    /**
     * Update a Notification's read status
     * Update the read status of a notification
     * @param data The data for the request.
     * @param data.id The ID of the notification
     * @param data.unread Whether the notification should be marked as read or not
     * @returns unknown Success
     * @throws ApiError
     */
    static putNotificationsId(data: $OpenApiTs['/notifications/{id}']['put']['req']): CancelablePromise<$OpenApiTs['/notifications/{id}']['put']['res'][200]>;
    /**
     * Get a field of a Notification
     * Get a specific property of a notification
     * @param data The data for the request.
     * @param data.id The ID of the notification
     * @param data.field A notification [field](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getNotificationsIdField(data: $OpenApiTs['/notifications/{id}/{field}']['get']['req']): CancelablePromise<$OpenApiTs['/notifications/{id}/{field}']['get']['res'][200]>;
    /**
     * Mark all Notifications as read
     * Mark all notifications as read
     * @param data The data for the request.
     * @param data.read Boolean to specify whether to mark as read or unread (defaults to `true`, marking as read)
     * @param data.ids A comma-seperated list of IDs. Allows specifying an array of notification IDs to change the read state for. This will become useful as we add grouping of notifications to the UI, with a single button to mark all notifications in the group as read/unread.
     * @returns unknown Success
     * @throws ApiError
     */
    static postNotificationsAllRead(data?: $OpenApiTs['/notifications/all/read']['post']['req']): CancelablePromise<$OpenApiTs['/notifications/all/read']['post']['res'][200]>;
    /**
     * Update Notification's read status
     * Update Notification's read status
     * @param data The data for the request.
     * @param data.id The ID of the notification
     * @param data.value
     * @returns unknown Success
     * @throws ApiError
     */
    static putNotificationsIdUnread(data: $OpenApiTs['/notifications/{id}/unread']['put']['req']): CancelablePromise<$OpenApiTs['/notifications/{id}/unread']['put']['res'][200]>;
    /**
     * Get the Board a Notification is on
     * Get the board a notification is associated with
     * @param data The data for the request.
     * @param data.id The ID of the notification
     * @param data.fields `all` or a comma-separated list of board[fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getNotificationsIdBoard(data: $OpenApiTs['/notifications/{id}/board']['get']['req']): CancelablePromise<$OpenApiTs['/notifications/{id}/board']['get']['res'][200]>;
    /**
     * Get the Card a Notification is on
     * Get the card a notification is associated with
     * @param data The data for the request.
     * @param data.id The ID of the notification
     * @param data.fields `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getNotificationsIdCard(data: $OpenApiTs['/notifications/{id}/card']['get']['req']): CancelablePromise<$OpenApiTs['/notifications/{id}/card']['get']['res'][200]>;
    /**
     * Get the List a Notification is on
     * Get the list a notification is associated with
     * @param data The data for the request.
     * @param data.id The ID of the notification
     * @param data.fields `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getNotificationsIdList(data: $OpenApiTs['/notifications/{id}/list']['get']['req']): CancelablePromise<$OpenApiTs['/notifications/{id}/list']['get']['res'][200]>;
    /**
     * Get the Member a Notification is about (not the creator)
     * Get the member (not the creator) a notification is about
     * @param data The data for the request.
     * @param data.id The ID of the notification
     * @param data.fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static notificationsidmember(data: $OpenApiTs['/notifications/{id}/member']['get']['req']): CancelablePromise<$OpenApiTs['/notifications/{id}/member']['get']['res'][200]>;
    /**
     * Get the Member who created the Notification
     * Get the member who created the notification
     * @param data The data for the request.
     * @param data.id The ID of the notification
     * @param data.fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getNotificationsIdMembercreator(data: $OpenApiTs['/notifications/{id}/memberCreator']['get']['req']): CancelablePromise<$OpenApiTs['/notifications/{id}/memberCreator']['get']['res'][200]>;
    /**
     * Get a Notification's associated Organization
     * Get the organization a notification is associated with
     * @param data The data for the request.
     * @param data.id The ID of the notification
     * @param data.fields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getNotificationsIdOrganization(data: $OpenApiTs['/notifications/{id}/organization']['get']['req']): CancelablePromise<$OpenApiTs['/notifications/{id}/organization']['get']['res'][200]>;
    /**
     * Create a new Organization
     * Create a new Workspace
     * @param data The data for the request.
     * @param data.displayName The name to display for the Organization
     * @param data.desc The description for the organizations
     * @param data.name A string with a length of at least 3. Only lowercase letters, underscores, and numbers are allowed. If the name contains invalid characters, they will be removed. If the name conflicts with an existing name, a new name will be substituted.
     * @param data.website A URL starting with `http://` or `https://`
     * @returns unknown Success
     * @throws ApiError
     */
    static postOrganizations(data: $OpenApiTs['/organizations']['post']['req']): CancelablePromise<$OpenApiTs['/organizations']['post']['res'][200]>;
    /**
     * Get an Organization
     * @param data The data for the request.
     * @param data.id The ID or name of the Organization
     * @returns Organization Success
     * @throws ApiError
     */
    static getOrganizationsId(data: $OpenApiTs['/organizations/{id}']['get']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}']['get']['res'][200]>;
    /**
     * Update an Organization
     * Update an organization
     * @param data The data for the request.
     * @param data.id The ID or name of the Organization
     * @param data.name A new name for the organization. At least 3 lowercase letters, underscores, and numbers. Must be unique
     * @param data.displayName A new displayName for the organization. Must be at least 1 character long and not begin or end with a space.
     * @param data.desc A new description for the organization
     * @param data.website A URL starting with `http://`, `https://`, or `null`
     * @param data.prefsAssociatedDomain The Google Apps domain to link this org to.
     * @param data.prefsExternalMembersDisabled Whether non-workspace members can be added to boards inside the Workspace
     * @param data.prefsGoogleAppsVersion `1` or `2`
     * @param data.prefsBoardVisibilityRestrictOrg Who on the Workspace can make Workspace visible boards. One of `admin`, `none`, `org`
     * @param data.prefsBoardVisibilityRestrictPrivate Who can make private boards. One of: `admin`, `none`, `org`
     * @param data.prefsBoardVisibilityRestrictPublic Who on the Workspace can make public boards. One of: `admin`, `none`, `org`
     * @param data.prefsOrgInviteRestrict An email address with optional wildcard characters. (E.g. `subdomain.*.trello.com`)
     * @param data.prefsPermissionLevel Whether the Workspace page is publicly visible. One of: `private`, `public`
     * @returns Organization Success
     * @throws ApiError
     */
    static putOrganizationsId(data: $OpenApiTs['/organizations/{id}']['put']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}']['put']['res'][200]>;
    /**
     * Delete an Organization
     * Delete an Organization
     * @param data The data for the request.
     * @param data.id The ID or name of the Organization
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteOrganizationsId(data: $OpenApiTs['/organizations/{id}']['delete']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}']['delete']['res'][200]>;
    /**
     * Get field on Organization
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @param data.field An organization [field](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns Organization Success
     * @throws ApiError
     */
    static getOrganizationsIdField(data: $OpenApiTs['/organizations/{id}/{field}']['get']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/{field}']['get']['res'][200]>;
    /**
     * Get Actions for Organization
     * List the actions on a Workspace
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @returns Action Success
     * @throws ApiError
     */
    static getOrganizationsIdActions(data: $OpenApiTs['/organizations/{id}/actions']['get']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/actions']['get']['res'][200]>;
    /**
     * Get Boards in an Organization
     * List the boards in a Workspace
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @param data.filter `all` or a comma-separated list of: `open`, `closed`, `members`, `organization`, `public`
     * @param data.fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns unknown Success
     * @throws ApiError
     */
    static getOrganizationsIdBoards(data: $OpenApiTs['/organizations/{id}/boards']['get']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/boards']['get']['res'][200]>;
    /**
     * Create Export for Organizations
     * Kick off CSV export for an organization
     * @param data The data for the request.
     * @param data.id The ID or name of the Workspace
     * @param data.attachments Whether the CSV should include attachments or not.
     * @returns Export Success
     * @throws ApiError
     */
    static postOrganizationsIdExports(data: $OpenApiTs['/organizations/{id}/exports']['post']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/exports']['post']['res'][200]>;
    /**
     * Retrieve Organization's Exports
     * Retrieve the exports that exist for the given organization
     * @param data The data for the request.
     * @param data.id The ID or name of the Workspace
     * @returns Export Success
     * @throws ApiError
     */
    static getOrganizationsIdExports(data: $OpenApiTs['/organizations/{id}/exports']['get']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/exports']['get']['res'][200]>;
    /**
     * Get the Members of an Organization
     * List the members in a Workspace
     * @param data The data for the request.
     * @param data.id The ID or name of the Organization
     * @returns unknown Success
     * @throws ApiError
     */
    static getOrganizationsIdMembers(data: $OpenApiTs['/organizations/{id}/members']['get']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/members']['get']['res'][200]>;
    /**
     * Update an Organization's Members
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @param data.email An email address
     * @param data.fullName Name for the member, at least 1 character not beginning or ending with a space
     * @param data.type One of: `admin`, `normal`
     * @returns unknown Success
     * @throws ApiError
     */
    static putOrganizationsIdMembers(data: $OpenApiTs['/organizations/{id}/members']['put']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/members']['put']['res'][200]>;
    /**
     * Get Memberships of an Organization
     * List the memberships of a Workspace
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @param data.filter `all` or a comma-separated list of: `active`, `admin`, `deactivated`, `me`, `normal`
     * @param data.member Whether to include the Member objects with the Memberships
     * @returns unknown Success
     * @throws ApiError
     */
    static getOrganizationsIdMemberships(data: $OpenApiTs['/organizations/{id}/memberships']['get']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/memberships']['get']['res'][200]>;
    /**
     * Get a Membership of an Organization
     * Get a single Membership for an Organization
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @param data.idMembership The ID of the membership to load
     * @param data.member Whether to include the Member object in the response
     * @returns unknown Success
     * @throws ApiError
     */
    static getOrganizationsIdMembershipsIdmembership(data: $OpenApiTs['/organizations/{id}/memberships/{idMembership}']['get']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/memberships/{idMembership}']['get']['res'][200]>;
    /**
     * Get the pluginData Scoped to Organization
     * Get organization scoped pluginData on this Workspace
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @returns unknown Success
     * @throws ApiError
     */
    static getOrganizationsIdPlugindata(data: $OpenApiTs['/organizations/{id}/pluginData']['get']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/pluginData']['get']['res'][200]>;
    /**
     * Get Tags of an Organization
     * List the organization's collections
     * @param data The data for the request.
     * @param data.id The ID or name of the Organization
     * @returns unknown Success
     * @throws ApiError
     */
    static getOrganizationsIdTags(data: $OpenApiTs['/organizations/{id}/tags']['get']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/tags']['get']['res'][200]>;
    /**
     * Create a Tag in Organization
     * Create a Tag in an Organization
     * @param data The data for the request.
     * @param data.id The ID or name of the Organization
     * @returns unknown Success
     * @throws ApiError
     */
    static postOrganizationsIdTags(data: $OpenApiTs['/organizations/{id}/tags']['post']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/tags']['post']['res'][200]>;
    /**
     * Update a Member of an Organization
     * Add a member to a Workspace or update their member type.
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @param data.idMember The ID or username of the member to update
     * @param data.type One of: `admin`, `normal`
     * @returns unknown Success
     * @throws ApiError
     */
    static putOrganizationsIdMembersIdmember(data: $OpenApiTs['/organizations/{id}/members/{idMember}']['put']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/members/{idMember}']['put']['res'][200]>;
    /**
     * Remove a Member from an Organization
     * Remove a member from a Workspace
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @param data.idMember The ID of the Member to remove from the Workspace
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteOrganizationsIdMembers(data: $OpenApiTs['/organizations/{id}/members/{idMember}']['delete']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/members/{idMember}']['delete']['res'][200]>;
    /**
     * Deactivate or reactivate a member of an Organization
     * Deactivate or reactivate a member of a Workspace
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @param data.idMember The ID or username of the member to update
     * @param data.value
     * @returns unknown Success
     * @throws ApiError
     */
    static putOrganizationsIdMembersIdmemberDeactivated(data: $OpenApiTs['/organizations/{id}/members/{idMember}/deactivated']['put']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/members/{idMember}/deactivated']['put']['res'][200]>;
    /**
     * Update logo for an Organization
     * Set the logo image for a Workspace
     * @param data The data for the request.
     * @param data.id The ID or name of the Workspace
     * @param data.file Image file for the logo
     * @returns unknown Success
     * @throws ApiError
     */
    static postOrganizationsIdLogo(data: $OpenApiTs['/organizations/{id}/logo']['post']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/logo']['post']['res'][200]>;
    /**
     * Delete Logo for Organization
     * Delete a the logo from a Workspace
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteOrganizationsIdLogo(data: $OpenApiTs['/organizations/{id}/logo']['delete']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/logo']['delete']['res'][200]>;
    /**
     * Remove a Member from an Organization and all Organization Boards
     * Remove a member from a Workspace and from all Workspace boards
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @param data.idMember The ID of the member to remove from the Workspace
     * @returns unknown Success
     * @throws ApiError
     */
    static organizationsIdMembersIdmemberAll(data: $OpenApiTs['/organizations/{id}/members/{idMember}/all']['delete']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/members/{idMember}/all']['delete']['res'][200]>;
    /**
     * Remove the associated Google Apps domain from a Workspace
     * Remove the associated Google Apps domain from a Workspace
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteOrganizationsIdPrefsAssociateddomain(data: $OpenApiTs['/organizations/{id}/prefs/associatedDomain']['delete']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/prefs/associatedDomain']['delete']['res'][200]>;
    /**
     * Delete the email domain restriction on who can be invited to the Workspace
     * Remove the email domain restriction on who can be invited to the Workspace
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteOrganizationsIdPrefsOrginviterestrict(data: $OpenApiTs['/organizations/{id}/prefs/orgInviteRestrict']['delete']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/prefs/orgInviteRestrict']['delete']['res'][200]>;
    /**
     * Delete an Organization's Tag
     * Delete an organization's tag
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @param data.idTag The ID of the tag to delete
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteOrganizationsIdTagsIdtag(data: $OpenApiTs['/organizations/{id}/tags/{idTag}']['delete']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/tags/{idTag}']['delete']['res'][200]>;
    /**
     * Get Organizations new billable guests
     * Used to check whether the given board has new billable guests on it.
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @param data.idBoard The ID of the board to check for new billable guests.
     * @returns unknown Success
     * @throws ApiError
     */
    static getOrganizationsIdNewbillableguestsIdboard(data: $OpenApiTs['/organizations/{id}/newBillableGuests/{idBoard}']['get']['req']): CancelablePromise<$OpenApiTs['/organizations/{id}/newBillableGuests/{idBoard}']['get']['res'][200]>;
    /**
     * Get a Plugin
     * Get plugins
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @returns Plugin Success
     * @throws ApiError
     */
    static getPluginsId(data: $OpenApiTs['/plugins/{id}/']['get']['req']): CancelablePromise<$OpenApiTs['/plugins/{id}/']['get']['res'][200]>;
    /**
     * Update a Plugin
     * Update a Plugin
     * @param data The data for the request.
     * @param data.id The ID or name of the organization
     * @returns Plugin Success
     * @throws ApiError
     */
    static putPluginsId(data: $OpenApiTs['/plugins/{id}/']['put']['req']): CancelablePromise<$OpenApiTs['/plugins/{id}/']['put']['res'][200]>;
    /**
     * Create a Listing for Plugin
     * Create a new listing for a given locale for your Power-Up
     * @param data The data for the request.
     * @param data.idPlugin The ID of the Power-Up for which you are creating a new listing.
     * @param data.requestBody
     * @returns PluginListing Success
     * @throws ApiError
     */
    static postPluginsIdpluginListing(data: $OpenApiTs['/plugins/{idPlugin}/listing']['post']['req']): CancelablePromise<$OpenApiTs['/plugins/{idPlugin}/listing']['post']['res'][200]>;
    /**
     * Get Plugin's Member privacy compliance
     * @param data The data for the request.
     * @param data.id The ID of the Power-Up
     * @returns unknown Success
     * @throws ApiError
     */
    static getPluginsIdComplianceMemberprivacy(data: $OpenApiTs['/plugins/{id}/compliance/memberPrivacy']['get']['req']): CancelablePromise<$OpenApiTs['/plugins/{id}/compliance/memberPrivacy']['get']['res'][200]>;
    /**
     * Updating Plugin's Listing
     * Update an existing listing for your Power-Up
     * @param data The data for the request.
     * @param data.idPlugin The ID of the Power-Up whose listing is being updated.
     * @param data.idListing The ID of the existing listing for the Power-Up that is being updated.
     * @param data.requestBody
     * @returns PluginListing Success
     * @throws ApiError
     */
    static putPluginsIdpluginListingsIdlisting(data: $OpenApiTs['/plugins/{idPlugin}/listings/{idListing}']['put']['req']): CancelablePromise<$OpenApiTs['/plugins/{idPlugin}/listings/{idListing}']['put']['res'][200]>;
    /**
     * Search Trello
     * Find what you're looking for in Trello
     * @param data The data for the request.
     * @param data.query The search query with a length of 1 to 16384 characters
     * @param data.idBoards `mine` or a comma-separated list of Board IDs
     * @param data.idOrganizations A comma-separated list of Organization IDs
     * @param data.idCards A comma-separated list of Card IDs
     * @param data.modelTypes What type or types of Trello objects you want to search. all or a comma-separated list of: `actions`, `boards`, `cards`, `members`, `organizations`
     * @param data.boardFields all or a comma-separated list of: `closed`, `dateLastActivity`, `dateLastView`, `desc`, `descData`, `idOrganization`, `invitations`, `invited`, `labelNames`, `memberships`, `name`, `pinned`, `powerUps`, `prefs`, `shortLink`, `shortUrl`, `starred`, `subscribed`, `url`
     * @param data.boardsLimit The maximum number of boards returned. Maximum: 1000
     * @param data.boardOrganization Whether to include the parent organization with board results
     * @param data.cardFields all or a comma-separated list of: `badges`, `checkItemStates`, `closed`, `dateLastActivity`, `desc`, `descData`, `due`, `idAttachmentCover`, `idBoard`, `idChecklists`, `idLabels`, `idList`, `idMembers`, `idMembersVoted`, `idShort`, `labels`, `manualCoverAttachment`, `name`, `pos`, `shortLink`, `shortUrl`, `subscribed`, `url`
     * @param data.cardsLimit The maximum number of cards to return. Maximum: 1000
     * @param data.cardsPage The page of results for cards. Maximum: 100
     * @param data.cardBoard Whether to include the parent board with card results
     * @param data.cardList Whether to include the parent list with card results
     * @param data.cardMembers Whether to include member objects with card results
     * @param data.cardStickers Whether to include sticker objects with card results
     * @param data.cardAttachments Whether to include attachment objects with card results. A boolean value (true or false) or cover for only card cover attachments.
     * @param data.organizationFields all or a comma-separated list of billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website
     * @param data.organizationsLimit The maximum number of Workspaces to return. Maximum 1000
     * @param data.memberFields all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username
     * @param data.membersLimit The maximum number of members to return. Maximum 1000
     * @param data.partial By default, Trello searches for each word in your query against exactly matching words within Member content. Specifying partial to be true means that we will look for content that starts with any of the words in your query.  If you are looking for a Card titled "My Development Status Report", by default you would need to search for "Development". If you have partial enabled, you will be able to search for "dev" but not "velopment".
     * @returns unknown Success
     * @throws ApiError
     */
    static getSearch(data: $OpenApiTs['/search']['get']['req']): CancelablePromise<$OpenApiTs['/search']['get']['res'][200]>;
    /**
     * Search for Members
     * Search for Trello members.
     * @param data The data for the request.
     * @param data.query Search query 1 to 16384 characters long
     * @param data.limit The maximum number of results to return. Maximum of 20.
     * @param data.idBoard
     * @param data.idOrganization
     * @param data.onlyOrgMembers
     * @returns Member Success
     * @throws ApiError
     */
    static getSearchMembers(data: $OpenApiTs['/search/members/']['get']['req']): CancelablePromise<$OpenApiTs['/search/members/']['get']['res'][200]>;
    /**
     * Get a Token
     * Retrieve information about a token.
     * @param data The data for the request.
     * @param data.token
     * @param data.fields `all` or a comma-separated list of `dateCreated`, `dateExpires`, `idMember`, `identifier`, `permissions`
     * @param data.webhooks Determines whether to include webhooks.
     * @returns Token Success
     * @throws ApiError
     */
    static getTokensToken(data: $OpenApiTs['/tokens/{token}']['get']['req']): CancelablePromise<$OpenApiTs['/tokens/{token}']['get']['res'][200]>;
    /**
     * Get Token's Member
     * Retrieve information about a token's owner by token.
     * @param data The data for the request.
     * @param data.token
     * @param data.fields `all` or a comma-separated list of valid fields for [Member Object](/cloud/trello/guides/rest-api/object-definitions/).
     * @returns Member Success
     * @throws ApiError
     */
    static getTokensTokenMember(data: $OpenApiTs['/tokens/{token}/member']['get']['req']): CancelablePromise<$OpenApiTs['/tokens/{token}/member']['get']['res'][200]>;
    /**
     * Get Webhooks for Token
     * Retrieve all webhooks created with a Token.
     * @param data The data for the request.
     * @param data.token
     * @returns Webhook Success
     * @throws ApiError
     */
    static getTokensTokenWebhooks(data: $OpenApiTs['/tokens/{token}/webhooks']['get']['req']): CancelablePromise<$OpenApiTs['/tokens/{token}/webhooks']['get']['res'][200]>;
    /**
     * Create Webhooks for Token
     * Create a new webhook for a Token.
     * @param data The data for the request.
     * @param data.callbackUrl The URL that the webhook should POST information to.
     * @param data.idModel ID of the object to create a webhook on.
     * @param data.token
     * @param data.description A description to be displayed when retrieving information about the webhook.
     * @returns Webhook Success
     * @throws ApiError
     */
    static postTokensTokenWebhooks(data: $OpenApiTs['/tokens/{token}/webhooks']['post']['req']): CancelablePromise<$OpenApiTs['/tokens/{token}/webhooks']['post']['res'][200]>;
    /**
     * Get a Webhook belonging to a Token
     * Retrieve a webhook created with a Token.
     * @param data The data for the request.
     * @param data.token
     * @param data.idWebhook ID of the [Webhooks](ref:webhooks) to retrieve.
     * @returns Webhook Success
     * @throws ApiError
     */
    static getTokensTokenWebhooksIdwebhook(data: $OpenApiTs['/tokens/{token}/webhooks/{idWebhook}']['get']['req']): CancelablePromise<$OpenApiTs['/tokens/{token}/webhooks/{idWebhook}']['get']['res'][200]>;
    /**
     * Delete a Webhook created by Token
     * Delete a webhook created with given token.
     * @param data The data for the request.
     * @param data.token
     * @param data.idWebhook ID of the [Webhooks](ref:webhooks) to retrieve.
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteTokensTokenWebhooksIdwebhook(data: $OpenApiTs['/tokens/{token}/webhooks/{idWebhook}']['delete']['req']): CancelablePromise<$OpenApiTs['/tokens/{token}/webhooks/{idWebhook}']['delete']['res'][200]>;
    /**
     * Update a Webhook created by Token
     * Update a Webhook created by Token
     * @param data The data for the request.
     * @param data.token
     * @param data.idWebhook ID of the [Webhooks](ref:webhooks) to retrieve.
     * @param data.description A description to be displayed when retrieving information about the webhook.
     * @param data.callbackUrl The URL that the webhook should `POST` information to.
     * @param data.idModel ID of the object that the webhook is on.
     * @returns unknown Success
     * @throws ApiError
     */
    static tokenstokenwebhooks1(data: $OpenApiTs['/tokens/{token}/webhooks/{idWebhook}']['put']['req']): CancelablePromise<$OpenApiTs['/tokens/{token}/webhooks/{idWebhook}']['put']['res'][200]>;
    /**
     * Delete a Token
     * Delete a token.
     * @param data The data for the request.
     * @param data.token
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteToken(data: $OpenApiTs['/tokens/{token}/']['delete']['req']): CancelablePromise<$OpenApiTs['/tokens/{token}/']['delete']['res'][200]>;
    /**
     * Create a Webhook
     * Create a new webhook.
     * @param data The data for the request.
     * @param data.callbackUrl A valid URL that is reachable with a `HEAD` and `POST` request.
     * @param data.idModel ID of the model to be monitored
     * @param data.description A string with a length from `0` to `16384`.
     * @param data.active Determines whether the webhook is active and sending `POST` requests.
     * @returns Webhook Success
     * @throws ApiError
     */
    static postWebhooks(data: $OpenApiTs['/webhooks/']['post']['req']): CancelablePromise<$OpenApiTs['/webhooks/']['post']['res'][200]>;
    /**
     * Get a Webhook
     * Get a webhook by ID. You must use the token query parameter and pass in the token the webhook was created under, or else you will encounter a 'webhook does not belong to token' error.
     * @param data The data for the request.
     * @param data.id ID of the webhook to retrieve.
     * @returns Webhook Success
     * @throws ApiError
     */
    static getWebhooksId(data: $OpenApiTs['/webhooks/{id}']['get']['req']): CancelablePromise<$OpenApiTs['/webhooks/{id}']['get']['res'][200]>;
    /**
     * Update a Webhook
     * Update a webhook by ID.
     * @param data The data for the request.
     * @param data.id ID of the webhook to retrieve.
     * @param data.description A string with a length from `0` to `16384`.
     * @param data.callbackUrl A valid URL that is reachable with a `HEAD` and `POST` request.
     * @param data.idModel ID of the model to be monitored
     * @param data.active Determines whether the webhook is active and sending `POST` requests.
     * @returns Webhook Success
     * @throws ApiError
     */
    static putWebhooksId(data: $OpenApiTs['/webhooks/{id}']['put']['req']): CancelablePromise<$OpenApiTs['/webhooks/{id}']['put']['res'][200]>;
    /**
     * Delete a Webhook
     * Delete a webhook by ID.
     * @param data The data for the request.
     * @param data.id ID of the webhook to retrieve.
     * @returns unknown Success
     * @throws ApiError
     */
    static deleteWebhooksId(data: $OpenApiTs['/webhooks/{id}']['delete']['req']): CancelablePromise<$OpenApiTs['/webhooks/{id}']['delete']['res'][200]>;
    /**
     * Get a field on a Webhook
     * Get a field on a Webhook
     * @param data The data for the request.
     * @param data.id ID of the webhook.
     * @param data.field Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel`
     * @returns unknown Success
     * @throws ApiError
     */
    static webhooksidfield(data: $OpenApiTs['/webhooks/{id}/{field}']['get']['req']): CancelablePromise<$OpenApiTs['/webhooks/{id}/{field}']['get']['res'][200]>;
}

export declare type Emoji = {
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

export declare type Enterprise = {
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

export declare type EnterpriseAdmin = {
    id?: TrelloID;
    fullName?: string;
    username?: string;
};

export declare type EnterpriseAuditLog = {
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

declare type Error_2 = {
    code: string;
    message: string;
};
export { Error_2 as Error }

export declare type Export = {
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

declare type Headers_2 = Record<string, string>;

export declare type ImageDescriptor = {
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

declare class Interceptors<T> {
    _fns: Middleware<T>[];
    constructor();
    eject(fn: Middleware<T>): void;
    use(fn: Middleware<T>): void;
}

export declare type Label = {
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

export declare type Limits = {
    attachments?: {
        perBoard?: LimitsObject;
    };
};

export declare type LimitsObject = {
    status?: 'ok' | 'warning';
    disableAt?: number;
    warnAt?: number;
};

export declare type ListFields = 'id' | 'all';

export declare type Member = {
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

export declare type MemberFields = 'id' | 'all';

export declare type MemberPrefs = {
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

export declare type Membership = {
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

export declare type Memberships = {
    id?: TrelloID;
};

declare type Middleware<T> = (value: T) => T | Promise<T>;

declare type Notification_2 = {
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
export { Notification_2 as Notification }

export declare type NotificationChannelSettings = {
    id?: string;
    idMember?: TrelloID;
    blockedKeys?: Array<BlockedKey>;
    channel?: Channel;
};

export declare type NotificationFields = 'id' | 'unread' | 'type' | 'date' | 'dateRead' | 'data' | 'card' | 'board' | 'idMemberCreator' | 'idAction' | 'reactions';

declare interface OnCancel {
    readonly isResolved: boolean;
    readonly isRejected: boolean;
    readonly isCancelled: boolean;
    (cancelHandler: () => void): void;
}

export declare const OpenAPI: OpenAPIConfig;

export declare type OpenAPIConfig = {
    BASE: string;
    CREDENTIALS: 'include' | 'omit' | 'same-origin';
    ENCODE_PATH?: ((path: string) => string) | undefined;
    HEADERS?: Headers_2 | Resolver<Headers_2> | undefined;
    PASSWORD?: string | Resolver<string> | undefined;
    TOKEN?: string | Resolver<string> | undefined;
    USERNAME?: string | Resolver<string> | undefined;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    interceptors: {
        request: Interceptors<RequestInit>;
        response: Interceptors<Response>;
    };
};

export declare type Organization = {
    id?: TrelloID;
};

export declare type OrganizationFields = 'id' | 'name' | 'all';

export declare type PendingOrganizations = {
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

declare type Plugin_2 = {
    id?: TrelloID;
};
export { Plugin_2 as Plugin }

export declare type PluginData = {
    id?: TrelloID;
    idPlugin?: TrelloID;
    scope?: 'member' | 'board' | 'organization' | 'card';
    idModel?: TrelloID;
    value?: string;
    access?: 'private' | 'shared';
};

export declare type PluginListing = {
    id?: TrelloID;
    name?: string;
    locale?: string;
    description?: string;
    overview?: string;
};

export declare type posStringOrNumber = 'top' | 'bottom' | number;

export declare type Prefs = {
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

declare type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;

export declare type SavedSearch = {
    id?: TrelloID;
    name?: string;
    query?: string;
    pos?: posStringOrNumber;
};

export declare type Tag = {
    id?: TrelloID;
    name?: string;
};

export declare type Token = {
    id?: TrelloID;
    identifier?: string;
    idMember?: TrelloID;
    dateCreated?: string;
    dateExpires?: string | null;
    permissions?: Array<TokenPermission>;
};

export declare type TokenFields = 'identifier' | 'idMember' | 'dateCreated' | 'dateExpires' | 'permissions' | 'all';

export declare type TokenPermission = {
    idModel?: TrelloID | '*';
    modelType?: 'board' | 'member' | 'organization' | 'enterprise';
    read?: boolean;
    write?: boolean;
};

export declare type TransferrableOrganization = {
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

export declare type TrelloID = string;

export declare type TrelloList = {
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

export declare type ViewFilter = 'all' | 'closed' | 'none' | 'open';

export declare type Webhook = {
    id?: TrelloID;
    description?: string;
    idModel?: TrelloID;
    callbackURL?: string;
    active?: boolean;
    consecutiveFailures?: number;
    firstConsecutiveFailDate?: string | null;
};

export { }
