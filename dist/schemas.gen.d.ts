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
export declare const $APIKey: {
    readonly type: "string";
    readonly pattern: "^[0-9a-fA-F]{32}$";
    readonly example: "0471642aefef5fa1fa76530ce1ba4c85";
};
export declare const $APIToken: {
    readonly type: "string";
    readonly example: "9eb76d9a9d02b8dd40c2f3e5df18556c831d4d1fadbe2c45f8310e6c93b5c548";
};
export declare const $ActionFields: {
    readonly type: "string";
    readonly enum: readonly ["id", "idMemberCreator", "data", "type", "date", "limits", "display", "memberCreator"];
};
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
export declare const $AttachmentFields: {
    readonly type: "string";
    readonly enum: readonly ["id", "bytes", "date", "edgeColor", "idMember", "isUpload", "mimeType", "name", "previews", "url", "pos"];
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
export declare const $BlockedKey: {
    readonly type: "string";
    readonly enum: readonly ["notification_comment_card", "notification_added_a_due_date", "notification_changed_due_date", "notification_card_due_soon", "notification_removed_from_card", "notification_added_attachment_to_card", "notification_created_card", "notification_moved_card", "notification_archived_card", "notification_unarchived_card"];
    readonly example: "notification_comment_card";
};
export declare const $BoardFields: {
    readonly type: "string";
    readonly enum: readonly ["id", "name", "desc", "descData", "closed", "idMemberCreator", "idOrganization", "pinned", "url", "shortUrl", "prefs", "labelNames", "starred", "limits", "memberships", "enterpriseOwned"];
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
export declare const $CardFields: {
    readonly type: "string";
    readonly enum: readonly ["id", "address", "badges", "checkItemStates", "closed", "coordinates", "creationMethod", "dueComplete", "dateLastActivity", "desc", "descData", "due", "dueReminder", "idBoard", "idChecklists", "idLabels", "idList", "idMembers", "idMembersVoted", "idShort", "idAttachmentCover", "labels", "limits", "locationName", "manualCoverAttachment", "name", "pos", "shortLink", "shortUrl", "subscribed", "url", "cover", "isTemplate"];
    readonly description: "The fields on a Card.";
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
export declare const $TrelloID: {
    readonly type: "string";
    readonly pattern: "^[0-9a-fA-F]{24}$";
    readonly example: "5abbe4b7ddc1b351ef961414";
};
export declare const $ViewFilter: {
    readonly type: "string";
    readonly enum: readonly ["all", "closed", "none", "open"];
};
export declare const $Color: {
    readonly type: "string";
    readonly enum: readonly ["yellow", "purple", "blue", "red", "green", "orange", "black", "sky", "pink", "lime"];
    readonly nullable: true;
};
export declare const $CardAging: {
    readonly type: "string";
    readonly enum: readonly ["pirate", "regular"];
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
export declare const $ListFields: {
    readonly type: "string";
    readonly enum: readonly ["id"];
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
export declare const $MemberFields: {
    readonly type: "string";
    readonly enum: readonly ["id"];
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
export declare const $Memberships: {
    readonly type: "object";
    readonly description: "";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
        };
    };
};
export declare const $NotificationFields: {
    readonly type: "string";
    readonly enum: readonly ["id", "unread", "type", "date", "dateRead", "data", "card", "board", "idMemberCreator", "idAction", "reactions"];
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
export declare const $OrganizationFields: {
    readonly type: "string";
    readonly enum: readonly ["id", "name"];
};
export declare const $Organization: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly $ref: "#/components/schemas/TrelloID";
        };
    };
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
export declare const $TokenFields: {
    readonly type: "string";
    readonly enum: readonly ["identifier", "idMember", "dateCreated", "dateExpires", "permissions"];
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
export declare const $CFValue: {
    readonly type: "object";
    readonly properties: {
        readonly number: {
            readonly type: "string";
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
