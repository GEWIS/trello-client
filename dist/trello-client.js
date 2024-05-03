class f extends Error {
  constructor(e, s, n) {
    super(n), this.name = "ApiError", this.url = s.url, this.status = s.status, this.statusText = s.statusText, this.body = s.body, this.request = e;
  }
}
class E extends Error {
  constructor(e) {
    super(e), this.name = "CancelError";
  }
  get isCancelled() {
    return !0;
  }
}
class C {
  constructor(e) {
    this._isResolved = !1, this._isRejected = !1, this._isCancelled = !1, this.cancelHandlers = [], this.promise = new Promise((s, n) => {
      this._resolve = s, this._reject = n;
      const o = (l) => {
        this._isResolved || this._isRejected || this._isCancelled || (this._isResolved = !0, this._resolve && this._resolve(l));
      }, d = (l) => {
        this._isResolved || this._isRejected || this._isCancelled || (this._isRejected = !0, this._reject && this._reject(l));
      }, a = (l) => {
        this._isResolved || this._isRejected || this._isCancelled || this.cancelHandlers.push(l);
      };
      return Object.defineProperty(a, "isResolved", {
        get: () => this._isResolved
      }), Object.defineProperty(a, "isRejected", {
        get: () => this._isRejected
      }), Object.defineProperty(a, "isCancelled", {
        get: () => this._isCancelled
      }), e(o, d, a);
    });
  }
  get [Symbol.toStringTag]() {
    return "Cancellable Promise";
  }
  then(e, s) {
    return this.promise.then(e, s);
  }
  catch(e) {
    return this.promise.catch(e);
  }
  finally(e) {
    return this.promise.finally(e);
  }
  cancel() {
    if (!(this._isResolved || this._isRejected || this._isCancelled)) {
      if (this._isCancelled = !0, this.cancelHandlers.length)
        try {
          for (const e of this.cancelHandlers)
            e();
        } catch (e) {
          console.warn("Cancellation threw an error", e);
          return;
        }
      this.cancelHandlers.length = 0, this._reject && this._reject(new E("Request aborted"));
    }
  }
  get isCancelled() {
    return this._isCancelled;
  }
}
class g {
  constructor() {
    this._fns = [];
  }
  eject(e) {
    const s = this._fns.indexOf(e);
    s !== -1 && (this._fns = [...this._fns.slice(0, s), ...this._fns.slice(s + 1)]);
  }
  use(e) {
    this._fns = [...this._fns, e];
  }
}
const t = {
  BASE: "https://api.trello.com/1",
  CREDENTIALS: "include",
  ENCODE_PATH: void 0,
  HEADERS: void 0,
  PASSWORD: void 0,
  TOKEN: void 0,
  USERNAME: void 0,
  VERSION: "0.0.1",
  WITH_CREDENTIALS: !1,
  interceptors: {
    request: new g(),
    response: new g()
  }
}, j = {
  oneOf: [
    {
      type: "string",
      enum: ["top", "bottom"]
    },
    {
      type: "number",
      format: "float",
      example: 1293.5
    }
  ]
}, L = {
  type: "string",
  pattern: "^[0-9a-fA-F]{32}$",
  example: "0471642aefef5fa1fa76530ce1ba4c85"
}, A = {
  type: "string",
  example: "9eb76d9a9d02b8dd40c2f3e5df18556c831d4d1fadbe2c45f8310e6c93b5c548"
}, w = {
  type: "string",
  enum: ["id", "idMemberCreator", "data", "type", "date", "limits", "display", "memberCreator"]
}, _ = {
  type: "object",
  properties: {
    id: {
      type: "string",
      $ref: "#/components/schemas/TrelloID"
    },
    idMemberCreator: {
      type: "string",
      $ref: "#/components/schemas/TrelloID"
    },
    data: {
      type: "object",
      properties: {
        text: {
          type: "string",
          example: "Can never go wrong with bowie"
        },
        card: {
          type: "object",
          properties: {
            id: {
              type: "string",
              $ref: "#/components/schemas/TrelloID"
            },
            name: {
              type: "string",
              example: "Bowie"
            },
            idShort: {
              type: "integer",
              example: 7
            },
            shortLink: {
              type: "string",
              example: "3CsPkqOF"
            }
          }
        },
        board: {
          type: "object",
          properties: {
            id: {
              type: "string",
              $ref: "#/components/schemas/TrelloID"
            },
            name: {
              type: "string",
              example: "Mullets"
            },
            shortLink: {
              type: "string",
              example: "3CsPkqOF"
            }
          }
        },
        list: {
          type: "object",
          properties: {
            id: {
              type: "string",
              $ref: "#/components/schemas/TrelloID"
            },
            name: {
              type: "string",
              example: "Amazing"
            }
          }
        }
      }
    },
    type: {
      type: "string",
      example: "commentCard"
    },
    date: {
      type: "string",
      format: "date-time",
      example: "2020-03-09T19:41:51.396Z"
    },
    limits: {
      type: "object",
      properties: {
        reactions: {
          type: "object",
          properties: {
            perAction: {
              type: "object",
              properties: {
                status: {
                  type: "string",
                  example: "ok"
                },
                disableAt: {
                  type: "number",
                  example: 1e3
                },
                warnAt: {
                  type: "number",
                  example: 900
                }
              }
            },
            uniquePerAction: {
              type: "object",
              properties: {
                status: {
                  type: "string",
                  example: "ok"
                },
                disableAt: {
                  type: "number",
                  example: 1e3
                },
                warnAt: {
                  type: "number",
                  example: 900
                }
              }
            }
          }
        }
      }
    },
    display: {
      type: "object",
      properties: {
        translationKey: {
          type: "string",
          example: "action_comment_on_card"
        },
        entities: {
          type: "object",
          properties: {
            contextOn: {
              type: "object",
              properties: {
                type: {
                  type: "string",
                  example: "translatable"
                },
                translationKey: {
                  type: "string",
                  example: "action_on"
                },
                hideIfContext: {
                  type: "boolean"
                },
                idContext: {
                  type: "string",
                  $ref: "#/components/schemas/TrelloID"
                }
              }
            },
            card: {
              type: "object",
              properties: {
                type: {
                  type: "string",
                  example: "card"
                },
                hideIfContext: {
                  type: "boolean"
                },
                id: {
                  type: "string",
                  $ref: "#/components/schemas/TrelloID"
                },
                shortLink: {
                  type: "string",
                  example: "3CsPkqOF"
                },
                text: {
                  type: "string",
                  example: "Bowie"
                }
              }
            },
            comment: {
              type: "object",
              properties: {
                type: {
                  type: "string",
                  example: "comment"
                },
                text: {
                  type: "string",
                  example: "Can never go wrong with bowie"
                }
              }
            },
            memberCreator: {
              type: "object",
              properties: {
                type: {
                  type: "string",
                  example: "member"
                },
                id: {
                  $ref: "#/components/schemas/TrelloID"
                },
                username: {
                  type: "string",
                  example: "bobloblaw"
                },
                text: {
                  type: "string",
                  example: "Bob Loblaw (World)"
                }
              }
            }
          }
        }
      }
    },
    memberCreator: {
      type: "object",
      properties: {
        id: {
          type: "string",
          $ref: "#/components/schemas/TrelloID",
          example: "5b02e7f4e1facdc393169f9d"
        },
        activityBlocked: {
          type: "boolean",
          example: !1
        },
        avatarHash: {
          type: "string",
          example: "db2adf80c2e6c26b76e1f10400eb4c45"
        },
        avatarUrl: {
          type: "string",
          format: "url",
          example: "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45"
        },
        fullName: {
          type: "string",
          example: "Bob Loblaw (Trello)"
        },
        idMemberReferrer: {
          type: "string",
          $ref: "#/components/schemas/TrelloID",
          nullable: !0,
          example: null
        },
        initials: {
          type: "string",
          example: "BL"
        },
        username: {
          type: "string",
          example: "bobloblaw"
        }
      }
    }
  }
}, G = {
  type: "string",
  enum: ["id", "bytes", "date", "edgeColor", "idMember", "isUpload", "mimeType", "name", "previews", "url", "pos"]
}, F = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID",
      example: "5bc79d4206526d2279c1e6ea"
    },
    bytes: {
      type: "string",
      example: null,
      nullable: !0
    },
    date: {
      type: "string",
      format: "date",
      example: "2018-10-17T19:10:14.808Z"
    },
    edgeColor: {
      type: "string",
      $ref: "#/components/schemas/Color",
      example: null,
      nullable: !0
    },
    idMember: {
      type: "string",
      $ref: "#/components/schemas/TrelloID",
      example: "5bc79d4206526d2279c1e6eb"
    },
    isUpload: {
      type: "boolean",
      example: !1
    },
    mimeType: {
      type: "string",
      example: ""
    },
    name: {
      type: "string",
      example: "Deprecation Extension Notice"
    },
    previews: {
      type: "array",
      items: {
        type: "string"
      },
      example: []
    },
    url: {
      type: "string",
      format: "url",
      example: "https://admin.typeform.com/form/RzExEM/share#/link"
    },
    pos: {
      type: "number",
      format: "float",
      example: 1638
    }
  }
}, U = {
  type: "string",
  enum: ["notification_comment_card", "notification_added_a_due_date", "notification_changed_due_date", "notification_card_due_soon", "notification_removed_from_card", "notification_added_attachment_to_card", "notification_created_card", "notification_moved_card", "notification_archived_card", "notification_unarchived_card"],
  example: "notification_comment_card"
}, N = {
  type: "string",
  enum: ["id", "name", "desc", "descData", "closed", "idMemberCreator", "idOrganization", "pinned", "url", "shortUrl", "prefs", "labelNames", "starred", "limits", "memberships", "enterpriseOwned"]
}, R = {
  type: "object",
  required: ["id"],
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID"
    },
    name: {
      type: "string",
      description: "The name of the board.",
      example: "Trello Platform Changes"
    },
    desc: {
      type: "string",
      example: "Track changes to Trello's Platform on this board."
    },
    descData: {
      type: "string"
    },
    closed: {
      type: "boolean",
      example: !1
    },
    idMemberCreator: {
      $ref: "#/components/schemas/TrelloID"
    },
    idOrganization: {
      $ref: "#/components/schemas/TrelloID"
    },
    pinned: {
      type: "boolean",
      example: !1
    },
    url: {
      type: "string",
      format: "url",
      example: "https://trello.com/b/dQHqCohZ/trello-platform-changelog"
    },
    shortUrl: {
      type: "string",
      format: "url",
      example: "https://trello.com/b/dQHqCohZ"
    },
    prefs: {
      $ref: "#/components/schemas/Prefs"
    },
    labelNames: {
      type: "object",
      properties: {
        green: {
          type: "string",
          example: "Addition"
        },
        yellow: {
          type: "string",
          example: "Update"
        },
        orange: {
          type: "string",
          example: "Deprecation"
        },
        red: {
          type: "string",
          example: "Deletion"
        },
        purple: {
          type: "string",
          example: "Power-Ups"
        },
        blue: {
          type: "string",
          example: "News"
        },
        sky: {
          type: "string",
          example: "Announcement"
        },
        lime: {
          type: "string",
          example: "Delight"
        },
        pink: {
          type: "string",
          example: "REST API"
        },
        black: {
          type: "string",
          example: "Capabilties"
        }
      }
    },
    limits: {
      type: "object",
      $ref: "#/components/schemas/Limits"
    },
    starred: {
      type: "boolean"
    },
    memberships: {
      type: "string"
    },
    shortLink: {
      type: "string"
    },
    subscribed: {
      type: "boolean"
    },
    powerUps: {
      type: "string"
    },
    dateLastActivity: {
      type: "string",
      format: "date"
    },
    dateLastView: {
      type: "string",
      format: "date"
    },
    idTags: {
      type: "string"
    },
    datePluginDisable: {
      type: "string",
      format: "date",
      nullable: !0
    },
    creationMethod: {
      type: "string",
      nullable: !0
    },
    ixUpdate: {
      type: "integer"
    },
    templateGallery: {
      type: "string",
      nullable: !0
    },
    enterpriseOwned: {
      type: "boolean"
    }
  }
}, H = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID"
    }
  }
}, V = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID",
      example: "585063850027165010be15a8"
    },
    idBoard: {
      $ref: "#/components/schemas/TrelloID",
      example: "57f7df684f1ca8c2877162e0"
    },
    pos: {
      type: "integer",
      example: 32768
    }
  }
}, W = {
  type: "string",
  enum: ["email"],
  example: "email"
}, K = {
  type: "object",
  properties: {
    idChecklist: {
      $ref: "#/components/schemas/TrelloID",
      example: "5dc9b507756e182c76007621"
    },
    state: {
      type: "string",
      enum: ["complete", "incomplete"],
      example: "incomplete"
    },
    id: {
      $ref: "#/components/schemas/TrelloID",
      example: "5dc9b509f02f4314edc4303a"
    },
    name: {
      type: "string"
    },
    nameData: {
      type: "string",
      nullable: !0,
      example: null
    },
    pos: {
      type: "string",
      example: 1673
    }
  }
}, Z = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID"
    }
  }
}, J = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID"
    },
    address: {
      type: "string",
      nullable: !0
    },
    badges: {
      type: "object",
      properties: {
        attachmentsByType: {
          type: "object",
          properties: {
            trello: {
              type: "object",
              properties: {
                board: {
                  type: "number"
                },
                card: {
                  type: "number"
                }
              }
            }
          }
        },
        location: {
          type: "boolean"
        },
        votes: {
          type: "integer"
        },
        viewingMemberVoted: {
          type: "boolean",
          example: !1
        },
        subscribed: {
          type: "boolean",
          example: !1
        },
        fogbugz: {
          type: "string"
        },
        checkItems: {
          type: "integer",
          example: 0
        },
        checkItemsChecked: {
          type: "integer",
          example: 0
        },
        comments: {
          type: "integer",
          example: 0
        },
        attachments: {
          type: "integer",
          example: 0
        },
        description: {
          type: "boolean"
        },
        due: {
          type: "string",
          format: "date",
          nullable: !0
        },
        start: {
          type: "string",
          format: "date",
          nullable: !0
        },
        dueComplete: {
          type: "boolean"
        }
      }
    },
    checkItemStates: {
      type: "array",
      items: {
        oneOf: [
          {
            type: "string"
          }
        ]
      }
    },
    closed: {
      type: "boolean"
    },
    coordinates: {
      type: "string",
      nullable: !0
    },
    creationMethod: {
      type: "string",
      nullable: !0
    },
    dateLastActivity: {
      type: "string",
      format: "date-time",
      example: "2019-09-16T16:19:17.156Z"
    },
    desc: {
      type: "string",
      example: `👋Hey there,

Trello's Platform team uses this board to keep developers up-to-date.`
    },
    descData: {
      type: "object",
      properties: {
        emoji: {
          type: "object"
        }
      }
    },
    due: {
      type: "string",
      format: "date",
      nullable: !0
    },
    dueReminder: {
      type: "string",
      nullable: !0
    },
    idBoard: {
      type: "string",
      $ref: "#/components/schemas/TrelloID",
      example: "5abbe4b7ddc1b351ef961414"
    },
    idChecklists: {
      type: "array",
      items: {
        oneOf: [
          {
            $ref: "#/components/schemas/Checklist"
          },
          {
            $ref: "#/components/schemas/TrelloID"
          }
        ]
      }
    },
    idLabels: {
      type: "array",
      items: {
        oneOf: [
          {
            $ref: "#/components/schemas/Label"
          },
          {
            $ref: "#/components/schemas/TrelloID"
          }
        ]
      }
    },
    idList: {
      type: "string",
      $ref: "#/components/schemas/TrelloID",
      example: "5abbe4b7ddc1b351ef961415"
    },
    idMembers: {
      type: "array",
      items: {
        oneOf: [
          {
            $ref: "#/components/schemas/TrelloID"
          }
        ]
      }
    },
    idMembersVoted: {
      type: "array",
      items: {
        oneOf: [
          {
            $ref: "#/components/schemas/TrelloID"
          }
        ]
      }
    },
    idShort: {
      type: "integer"
    },
    idAttachmentCover: {
      type: "string",
      $ref: "#/components/schemas/TrelloID",
      example: "5abbe4b7ddc1b351ef961415",
      nullable: !0
    },
    labels: {
      type: "array",
      items: {
        oneOf: [
          {
            $ref: "#/components/schemas/TrelloID"
          }
        ]
      }
    },
    limits: {
      type: "object",
      $ref: "#/components/schemas/Limits"
    },
    locationName: {
      type: "string",
      nullable: !0
    },
    manualCoverAttachment: {
      type: "boolean",
      example: !1
    },
    name: {
      type: "string",
      example: "👋 What? Why? How?"
    },
    pos: {
      type: "number",
      format: "float",
      example: 65535
    },
    shortLink: {
      type: "string",
      example: "H0TZyzbK"
    },
    shortUrl: {
      type: "string",
      format: "url",
      example: "https://trello.com/c/H0TZyzbK"
    },
    subscribed: {
      type: "boolean",
      example: !1
    },
    url: {
      type: "string",
      format: "url",
      example: "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how"
    },
    cover: {
      type: "object",
      properties: {
        idAttachment: {
          type: "string",
          $ref: "#/components/schemas/TrelloID",
          nullable: !0
        },
        color: {
          $ref: "#/components/schemas/Color",
          nullable: !0
        },
        idUploadedBackground: {
          type: "boolean",
          nullable: !0
        },
        size: {
          type: "string",
          enum: ["normal"]
        },
        brightness: {
          type: "string",
          enum: ["light", "dark"]
        },
        isTemplate: {
          type: "boolean",
          example: !1
        }
      }
    }
  }
}, Q = {
  type: "string",
  enum: ["id", "address", "badges", "checkItemStates", "closed", "coordinates", "creationMethod", "dueComplete", "dateLastActivity", "desc", "descData", "due", "dueReminder", "idBoard", "idChecklists", "idLabels", "idList", "idMembers", "idMembersVoted", "idShort", "idAttachmentCover", "labels", "limits", "locationName", "manualCoverAttachment", "name", "pos", "shortLink", "shortUrl", "subscribed", "url", "cover", "isTemplate"],
  description: "The fields on a Card."
}, Y = {
  type: "object",
  properties: {
    organizations: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
            example: "organization_name"
          },
          displayName: {
            type: "string",
            example: "Organization Name"
          },
          activeMembershipCount: {
            type: "number",
            example: 5
          },
          idActiveAdmins: {
            type: "array",
            items: {
              $ref: "#/components/schemas/TrelloID"
            }
          },
          products: {
            type: "array",
            items: {
              type: "number",
              format: "integer"
            }
          },
          id: {
            type: "string",
            $ref: "#/components/schemas/TrelloID",
            example: "617abd5995eae45169a11059"
          },
          logoUrl: {
            type: "string",
            nullable: !0,
            example: null
          },
          dateLastActive: {
            type: "string",
            nullable: !0,
            example: "2019-08-22T18:15:53.546Z",
            format: "date",
            description: "The date of the most recent activity on any of the boards in the workspace. If the workspace has no boards, or the boards have no activity, this value will be null."
          }
        }
      }
    },
    claimableCount: {
      type: "number",
      example: 2
    }
  }
}, X = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID",
      example: "5900ac11ed55d6d2c355c5d6"
    },
    url: {
      type: "string",
      format: "url",
      example: "https://trello-emoji.s3.amazonaws.com/5589c3ea49b40cedc28cf70e/b40d9925f4e75495104b5e560881d8e4/chorizo.png"
    },
    name: {
      type: "string",
      example: "chorizo"
    }
  }
}, ee = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID",
      example: "5ab10be237846c43015f108e"
    },
    idModel: {
      type: "string",
      example: "586e8f681d4fe9b06a928307"
    },
    modelType: {
      type: "string",
      enum: ["card", "board", "member"],
      example: "board"
    },
    fieldGroup: {
      type: "string",
      example: "f6177ba6839d6fff0f73922c1cea105e793fda8a1433d466104dacc0b7c56955"
    },
    display: {
      type: "object",
      properties: {
        cardFront: {
          type: "boolean",
          example: !0
        },
        name: {
          type: "string",
          example: "Priority 🏔"
        },
        pos: {
          type: "string",
          example: "98304,"
        },
        options: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: {
                $ref: "#/components/schemas/TrelloID",
                example: "5ab10be237846c43015f1091"
              },
              idCustomField: {
                $ref: "#/components/schemas/TrelloID",
                example: "5ab10be237846c43015f108e"
              },
              value: {
                type: "object",
                properties: {
                  text: {
                    type: "string",
                    example: "High"
                  }
                }
              },
              color: {
                type: "string",
                example: "red"
              },
              pos: {
                type: "number",
                example: 16384
              }
            }
          }
        }
      }
    },
    type: {
      type: "string",
      example: "list"
    }
  }
}, te = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID"
    },
    value: {
      type: "object",
      properties: {
        checked: {
          type: "string",
          example: "true"
        }
      }
    },
    idCustomField: {
      $ref: "#/components/schemas/TrelloID",
      example: "5b080fd8017bd1653b5480fa"
    },
    idModel: {
      $ref: "#/components/schemas/TrelloID",
      example: "5b080ff194611b41aaaa9570"
    },
    modelType: {
      type: "string",
      enum: ["card", "board", "member"],
      example: "card"
    }
  }
}, re = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID"
    },
    url: {
      type: "string",
      format: "url"
    },
    scaled: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            $ref: "#/components/schemas/TrelloID"
          }
        }
      }
    }
  }
}, ie = {
  type: "object",
  properties: {
    trello: {
      type: "array",
      items: {
        type: "object",
        properties: {
          unified: {
            type: "string",
            example: "1F600"
          },
          name: {
            type: "string",
            example: "GRINNING FACE"
          },
          native: {
            type: "string",
            example: "😀"
          },
          shortName: {
            type: "string",
            example: "grinning"
          },
          shortNames: {
            type: "array",
            items: {
              type: "string",
              example: 'grinning"'
            }
          },
          text: {
            type: "string",
            example: ":)"
          },
          texts: {
            type: "string",
            nullable: !0,
            example: null
          },
          category: {
            type: "string",
            example: "Smileys & People"
          },
          sheetX: {
            type: "number",
            example: 30
          },
          sheetY: {
            type: "number",
            example: 24
          },
          tts: {
            type: "string",
            example: "grinning face"
          },
          keywords: {
            type: "array",
            items: {
              type: "string",
              example: "face"
            }
          }
        }
      }
    }
  }
}, se = {
  type: "object",
  properties: {
    id: {
      type: "string",
      $ref: "#/components/schemas/TrelloID",
      example: "59c15d19566e197b23665901"
    },
    name: {
      type: "string",
      example: "bentley_test"
    },
    displayName: {
      type: "string",
      example: "Bentley's Test Enterprise!"
    },
    logoHash: {
      type: "string",
      nullable: !0,
      example: null
    },
    logoUrl: {
      type: "string",
      nullable: !0,
      example: null
    },
    prefs: {
      type: "object",
      properties: {
        ssoOnly: {
          type: "boolean",
          example: !1
        },
        signup: {
          type: "object",
          properties: {
            banner: {
              type: "string"
            },
            bannerHtml: {
              type: "string",
              example: `<p>Hello</p>
`
            }
          }
        },
        mandatoryTransferDate: {
          type: "string",
          format: "date",
          nullable: !0,
          example: null
        },
        brandingColor: {
          type: "string"
        },
        autoJoinOrganizations: {
          type: "boolean",
          example: !1
        },
        notifications: {
          type: "object"
        },
        maxMembers: {
          type: "number",
          nullable: !0,
          example: null
        }
      }
    },
    organizationPrefs: {
      type: "object",
      properties: {
        boardVisibilityRestrict: {
          type: "object"
        },
        boardDeleteRestrict: {
          type: "object"
        },
        attachmentRestrictions: {
          type: "array",
          items: {
            type: "string",
            enum: ["computer", "trello", "google-drive", "box", "onedrive", "link"]
          }
        }
      }
    },
    ssoActivationFailed: {
      type: "boolean"
    },
    idAdmins: {
      type: "array",
      items: {
        $ref: "#/components/schemas/TrelloID"
      }
    },
    enterpriseDomains: {
      type: "array",
      items: {
        type: "string",
        format: "url"
      }
    },
    isRealEnterprise: {
      type: "boolean",
      example: !0
    },
    pluginWhitelistingEnabled: {
      type: "array",
      items: {
        $ref: "#/components/schemas/TrelloID"
      }
    },
    idOrganizations: {
      type: "array",
      items: {
        $ref: "#/components/schemas/TrelloID"
      }
    },
    products: {
      type: "array",
      items: {
        type: "number",
        format: "integer"
      }
    },
    licenses: {
      type: "object",
      properties: {
        maxMembers: {
          type: "number",
          nullable: !0,
          format: "integer",
          example: null
        },
        totalMembers: {
          type: "number",
          format: "integer",
          example: 5
        },
        relatedEnterprises: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
                example: "enterprise_name"
              },
              displayName: {
                type: "string",
                example: "My Test Enterprise!"
              },
              count: {
                type: "number",
                example: 5,
                format: "integer"
              }
            }
          }
        }
      }
    },
    domains: {
      type: "array",
      items: {
        type: "string",
        format: "url"
      }
    },
    dateOrganizationPrefsLastUpdated: {
      type: "string",
      example: "2019-08-22T18:15:53.546Z",
      format: "date"
    },
    idp: {
      type: "object",
      properties: {
        requestSigned: {
          type: "boolean",
          example: !1
        },
        certificate: {
          type: "string",
          nullable: !0,
          example: null
        },
        loginUrl: {
          type: "string",
          format: "url",
          nullable: !0,
          example: null
        }
      }
    }
  }
}, oe = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID",
      example: "5dced8665015383ed5ca248c"
    },
    fullName: {
      type: "string",
      example: "Bob Loblaw"
    },
    username: {
      type: "string",
      example: "bobloblaw"
    }
  }
}, ne = {
  type: "object",
  properties: {
    idAction: {
      $ref: "#/components/schemas/TrelloID",
      example: "5dced8665015383ed5ca248c"
    },
    type: {
      type: "string",
      example: "addOrganizationToEnterprise"
    },
    date: {
      type: "string",
      format: "date",
      example: "2018-04-26T17:03:25.155Z"
    },
    memberCreator: {
      type: "object",
      properties: {
        id: {
          $ref: "#/components/schemas/TrelloID",
          example: "5bc79d4206526d2279c1e6ea"
        },
        username: {
          type: "string",
          example: "bobloblaw"
        },
        fullName: {
          type: "string",
          example: "Bob Loblaw (Trello)"
        }
      }
    },
    organization: {
      type: "object",
      properties: {
        enterpriseJoinRequest: {
          type: "object",
          nullable: !0,
          properties: {
            idEnterprise: {
              $ref: "#/components/schemas/TrelloID",
              example: "617ac9070293e6612650e0ca"
            },
            idMember: {
              $ref: "#/components/schemas/TrelloID",
              example: "5bc79d4206526d2279c1e6ea"
            },
            date: {
              type: "string",
              format: "date",
              example: "2018-04-26T17:03:25.155Z"
            }
          }
        },
        id: {
          $ref: "#/components/schemas/TrelloID",
          example: "617ac9070293e6612650e0ca"
        },
        name: {
          type: "string",
          example: "organization name"
        }
      }
    },
    member: {
      type: "object",
      properties: {
        id: {
          $ref: "#/components/schemas/TrelloID",
          example: "5bc79d4206526d2279c1e6ea"
        },
        username: {
          type: "string",
          example: "bentleycook"
        },
        fullName: {
          type: "string",
          example: "Bentley Cook"
        }
      }
    }
  }
}, de = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID",
      example: "5dced8665015383ed5ca248c"
    },
    status: {
      type: "object",
      properties: {
        attempts: {
          type: "number",
          example: 0
        },
        finished: {
          type: "boolean",
          example: !1
        },
        stage: {
          type: "string",
          example: "Export_queued"
        }
      }
    },
    startedAt: {
      type: "string",
      format: "date-time",
      example: "2019-11-15T16:55:02.000Z"
    },
    size: {
      type: "string",
      nullable: !0,
      example: null
    },
    exportUrl: {
      type: "string",
      nullable: !0,
      example: null
    }
  }
}, ae = {
  type: "string",
  pattern: "^[0-9a-fA-F]{24}$",
  example: "5abbe4b7ddc1b351ef961414"
}, le = {
  type: "string",
  enum: ["all", "closed", "none", "open"]
}, me = {
  type: "string",
  enum: ["yellow", "purple", "blue", "red", "green", "orange", "black", "sky", "pink", "lime"],
  nullable: !0
}, ce = {
  type: "string",
  enum: ["pirate", "regular"]
}, pe = {
  type: "object",
  properties: {
    width: {
      description: "The width of the image.",
      type: "integer",
      example: 100
    },
    height: {
      description: "The height of the image.",
      type: "integer",
      example: 64
    },
    url: {
      description: "The URL of the image.",
      format: "url",
      type: "string",
      example: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
    }
  }
}, ue = {
  type: "object",
  properties: {
    id: {
      description: "The ID of the label.",
      type: "string",
      $ref: "#/components/schemas/TrelloID"
    },
    idBoard: {
      type: "string",
      description: "The ID of the board the label is on.",
      $ref: "#/components/schemas/TrelloID",
      example: "5abbe4b7ddc1b351ef961414"
    },
    name: {
      type: "string",
      description: "The name displayed for the label.",
      example: "Overdue",
      nullable: !0,
      minLength: 0,
      maxLength: 16384
    },
    color: {
      type: "string",
      $ref: "#/components/schemas/Color",
      description: "The color of the label. Null means no color and the label will not be shown on the front of Cards."
    }
  }
}, be = {
  type: "string",
  enum: ["id"]
}, he = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID"
    },
    name: {
      type: "string",
      description: "The name of the list",
      example: "Things to buy today"
    },
    closed: {
      type: "boolean"
    },
    pos: {
      type: "number"
    },
    softLimit: {
      type: "string"
    },
    idBoard: {
      type: "string"
    },
    subscribed: {
      type: "boolean"
    },
    limits: {
      $ref: "#/components/schemas/Limits"
    }
  }
}, ye = {
  type: "object",
  properties: {
    status: {
      type: "string",
      enum: ["ok", "warning"]
    },
    disableAt: {
      type: "number",
      example: 36e3
    },
    warnAt: {
      type: "number",
      example: 32400
    }
  }
}, fe = {
  type: "object",
  properties: {
    attachments: {
      type: "object",
      properties: {
        perBoard: {
          type: "object",
          $ref: "#/components/schemas/LimitsObject"
        }
      }
    }
  }
}, ge = {
  type: "string",
  enum: ["id"]
}, Te = {
  type: "object",
  properties: {
    managed: {
      type: "boolean"
    },
    licensed: {
      type: "boolean"
    },
    admin: {
      type: "boolean"
    },
    deactivated: {
      type: "boolean"
    },
    collaborator: {
      type: "boolean"
    },
    member: {
      type: "object",
      properties: {
        id: {
          type: "string"
        },
        fullname: {
          type: "string"
        },
        username: {
          type: "string"
        },
        dateLastImpression: {
          type: "string"
        },
        email: {
          type: "string"
        },
        initials: {
          type: "string"
        },
        avatarURL: {
          type: "string"
        },
        memberType: {
          type: "string"
        },
        confirmed: {
          type: "boolean"
        }
      },
      example: {
        id: "646e92a0a016198d3cf81e8a",
        fullname: "Lex Math",
        username: "amath",
        dateLastImpression: "2023-05-24T22:41:36.406Z",
        email: "amath@trello.com",
        initials: "AM",
        avatarURL: "trello.com/avatarURL",
        memberType: "Admin",
        confirmed: !0
      }
    }
  }
}, Ie = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID"
    },
    activityBlocked: {
      type: "boolean",
      example: !1
    },
    avatarHash: {
      type: "string",
      example: "fc8faaaee46666a4eb8b626c08933e16"
    },
    avatarUrl: {
      type: "string",
      format: "url",
      example: "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16"
    },
    bio: {
      type: "string",
      example: "👋 I'm a developer advocate at Trello!"
    },
    bioData: {
      type: "object",
      properties: {
        emoji: {
          type: "object"
        }
      }
    },
    confirmed: {
      type: "boolean",
      example: !0
    },
    fullName: {
      type: "string",
      example: "Bentley Cook"
    },
    idEnterprise: {
      type: "string",
      $ref: "#/components/schemas/TrelloID"
    },
    idEnterprisesDeactivated: {
      type: "array",
      items: {
        type: "string"
      }
    },
    idMemberReferrer: {
      $ref: "#/components/schemas/TrelloID",
      nullable: !0,
      example: null
    },
    idPremOrgsAdmin: {
      type: "array",
      items: {
        $ref: "#/components/schemas/TrelloID"
      }
    },
    initials: {
      type: "string",
      example: "BC"
    },
    memberType: {
      type: "string",
      enum: ["normal", "ghost"],
      example: "normal"
    },
    nonPublic: {
      type: "object",
      description: `Profile data with restricted visibility. These fields are visible only to members of the
same organization. The values here (full name, for example) may differ from the values
at the top level of the response.
`,
      properties: {
        fullName: {
          type: "string",
          example: "Bentley Cook"
        },
        initials: {
          type: "string",
          example: "BC"
        },
        avatarUrl: {
          type: "string",
          format: "url",
          example: "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
          description: "A URL that references the non-public avatar for the member"
        },
        avatarHash: {
          type: "string",
          example: "db2adf80c2e6c26b76e1f10400eb4c45"
        }
      }
    },
    nonPublicAvailable: {
      type: "boolean",
      example: !1,
      description: "Whether the response contains non-public profile data for the member"
    },
    products: {
      type: "array",
      items: {
        type: "integer"
      }
    },
    url: {
      type: "string",
      format: "url",
      example: "https://trello.com/bentleycook"
    },
    username: {
      type: "string",
      example: "bentleycook"
    },
    status: {
      type: "string",
      enum: ["disconnected"],
      example: "disconnected"
    },
    aaEmail: {
      type: "string",
      format: "email",
      nullable: !0,
      example: null
    },
    aaEnrolledDate: {
      type: "string",
      example: null,
      nullable: !0
    },
    aaId: {
      type: "string",
      example: null,
      nullable: !0
    },
    avatarSource: {
      type: "string",
      enum: ["gravatar", "upload"],
      example: "gravatar"
    },
    email: {
      type: "string",
      example: "bcook@atlassian.com"
    },
    gravatarHash: {
      type: "string",
      example: "0a1e804f6e35a65ae5e1f7ef4c92471c"
    },
    idBoards: {
      type: "array",
      items: {
        $ref: "#/components/schemas/TrelloID"
      }
    },
    idOrganizations: {
      type: "array",
      items: {
        $ref: "#/components/schemas/TrelloID"
      }
    },
    idEnterprisesAdmin: {
      type: "array",
      items: {
        $ref: "#/components/schemas/TrelloID"
      }
    },
    limits: {
      $ref: "#/components/schemas/LimitsObject"
    },
    loginTypes: {
      type: "array",
      items: {
        type: "string",
        enum: ["password", "saml"],
        example: "password"
      }
    },
    marketingOptIn: {
      type: "object",
      properties: {
        optedIn: {
          type: "boolean",
          example: !1
        },
        date: {
          type: "string",
          format: "date",
          example: "2018-04-26T17:03:25.155Z"
        }
      }
    },
    messagesDismissed: {
      type: "object",
      properties: {
        name: {
          type: "string",
          example: "ad-security-features"
        },
        count: {
          type: "string",
          example: 4
        },
        lastDismissed: {
          type: "string",
          format: "date",
          example: "2019-03-11T20:19:46.809Z"
        },
        _id: {
          $ref: "#/components/schemas/TrelloID",
          example: "5995d44573d197eada632a32"
        }
      }
    },
    oneTimeMessagesDismissed: {
      type: "array",
      items: {
        type: "string"
      }
    },
    prefs: {
      $ref: "#/components/schemas/MemberPrefs"
    },
    trophies: {
      type: "array",
      items: {
        type: "string"
      }
    },
    uploadedAvatarHash: {
      type: "string",
      example: "dac3ad49ff117829dd63a79bb2ea3426"
    },
    uploadedAvatarUrl: {
      type: "string",
      format: "url",
      example: "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426"
    },
    premiumFeatures: {
      type: "array",
      items: {
        type: "string"
      }
    },
    isAaMastered: {
      type: "boolean",
      example: !1
    },
    ixUpdate: {
      type: "number",
      example: "48427"
    },
    idBoardsPinned: {
      type: "array",
      nullable: !0,
      items: {
        $ref: "#/components/schemas/TrelloID"
      }
    }
  }
}, ke = {
  type: "object",
  properties: {
    timezoneInfo: {
      type: "object",
      properties: {
        offsetCurrent: {
          type: "integer",
          example: 360
        },
        timezoneCurrent: {
          type: "string",
          example: "CST"
        },
        offsetNext: {
          type: "integer",
          example: 300
        },
        dateNext: {
          type: "string",
          format: "date",
          example: "2020-03-08T08:00:00.000Z"
        },
        timezoneNext: {
          type: "string",
          example: "CDT"
        }
      }
    },
    privacy: {
      type: "object",
      properties: {
        fullName: {
          type: "string",
          enum: ["public", "private", "collaborator"],
          example: "public"
        },
        avatar: {
          type: "string",
          enum: ["public", "private", "collaborator"],
          example: "public"
        }
      }
    },
    sendSummaries: {
      type: "boolean",
      example: !0
    },
    minutesBetweenSummaries: {
      type: "integer",
      example: 60
    },
    minutesBeforeDeadlineToNotify: {
      type: "integer",
      example: 1440
    },
    colorBlind: {
      type: "boolean",
      example: !0
    },
    locale: {
      type: "string",
      example: "en-AU"
    },
    timezone: {
      type: "string",
      example: "America/Chicago"
    },
    twoFactor: {
      type: "object",
      properties: {
        enabled: {
          type: "boolean",
          example: !0
        },
        needsNewBackups: {
          type: "boolean",
          example: !1
        }
      }
    }
  }
}, xe = {
  type: "object",
  description: "",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID"
    }
  }
}, Ee = {
  type: "string",
  enum: ["id", "unread", "type", "date", "dateRead", "data", "card", "board", "idMemberCreator", "idAction", "reactions"]
}, Ce = {
  properties: {
    id: {
      type: "string",
      example: "5dc591ac425f2a223aba0a8e"
    },
    unread: {
      type: "boolean",
      example: !0
    },
    type: {
      type: "string",
      enum: ["cardDueSoon"],
      example: "cardDueSoon"
    },
    date: {
      type: "string",
      example: "2019-11-08T16:02:52.763Z"
    },
    dateRead: {
      type: "string",
      example: null
    },
    data: {
      type: "string",
      example: null
    },
    card: {
      type: "object",
      $ref: "#/components/schemas/Card"
    },
    board: {
      type: "object",
      $ref: "#/components/schemas/Board"
    },
    idMemberCreator: {
      $ref: "#/components/schemas/TrelloID",
      nullable: !0,
      example: null
    },
    idAction: {
      $ref: "#/components/schemas/TrelloID",
      nullable: !0,
      example: null
    },
    reactions: {
      type: "array",
      example: []
    }
  }
}, Se = {
  properties: {
    id: {
      type: "string",
      example: "5dc591ac425f2a223aba0a8e"
    },
    idMember: {
      $ref: "#/components/schemas/TrelloID",
      example: "5589c3ea49b40cedc28cf70e"
    },
    blockedKeys: {
      type: "array",
      items: {
        $ref: "#/components/schemas/BlockedKey"
      }
    },
    channel: {
      $ref: "#/components/schemas/Channel"
    }
  }
}, ve = {
  type: "string",
  enum: ["id", "name"]
}, Be = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID"
    }
  }
}, Me = {
  type: "object",
  properties: {
    id: {
      type: "string",
      $ref: "#/components/schemas/TrelloID",
      example: "617ac9070293e6612650e0ca"
    },
    idMember: {
      $ref: "#/components/schemas/TrelloID",
      example: "5589c3ea49b40cedc28cf70e"
    },
    memberRequestor: {
      type: "object",
      properties: {
        id: {
          type: "string",
          $ref: "#/components/schemas/TrelloID",
          example: "59cd149051aa57a706962996"
        },
        fullName: {
          type: "string",
          example: "Bob Loblaw (Trello)"
        }
      }
    },
    date: {
      type: "string",
      format: "date",
      example: "2018-10-17T19:10:14.808Z"
    },
    displayName: {
      type: "string",
      example: "Organization Name"
    },
    membershipCount: {
      type: "number",
      example: 2
    },
    logoUrl: {
      type: "string",
      nullable: !0,
      example: null
    },
    transferability: {
      type: "object",
      properties: {
        transferrable: {
          type: "boolean",
          example: !0
        },
        newBillableMembers: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: {
                $ref: "#/components/schemas/TrelloID",
                example: "5ab10be237846c43015f1091"
              },
              fullName: {
                type: "string",
                example: "Bob Loblaw"
              },
              username: {
                type: "string",
                example: "bobloblaw"
              },
              initials: {
                type: "string",
                example: "BL"
              },
              avatarHash: {
                type: "string",
                example: "fc8faaaee46666a4eb8b626c08933e16"
              }
            }
          }
        },
        restrictedMembers: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: {
                $ref: "#/components/schemas/TrelloID",
                example: "5ab10be237846c43015f1091"
              },
              fullName: {
                type: "string",
                example: "Bob Loblaw"
              },
              username: {
                type: "string",
                example: "bobloblaw"
              },
              initials: {
                type: "string",
                example: "BL"
              },
              avatarHash: {
                type: "string",
                example: "fc8faaaee46666a4eb8b626c08933e16"
              }
            }
          }
        }
      }
    }
  }
}, qe = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID"
    }
  }
}, Pe = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID",
      example: "5c487f39294cab6ac1d6b305"
    },
    idPlugin: {
      $ref: "#/components/schemas/TrelloID",
      example: "55a5d915446f517774210003"
    },
    scope: {
      type: "string",
      enum: ["member", "board", "organization", "card"],
      example: "organization"
    },
    idModel: {
      $ref: "#/components/schemas/TrelloID",
      example: "586e8d7b1af892b26d5b76b1"
    },
    value: {
      type: "string",
      example: '{"token":"S=s458:U=bda7cda:E=16fd2e21f55:C=1687b30f2c0:P=185:A=it-team-0604:V=2:H=3b0f3bac9c2a2af766202ebb9530a4a5"}'
    },
    access: {
      type: "string",
      enum: ["private", "shared"],
      example: "private"
    }
  }
}, ze = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID",
      example: "5a7cd2f8f99c517f58da1579"
    },
    name: {
      type: "string",
      example: "Attachment Section Example"
    },
    locale: {
      type: "string",
      example: "en-US"
    },
    description: {
      type: "string",
      example: "The [Glitch](https://glitch.com) Power-Up allows you to..."
    },
    overview: {
      type: "string",
      example: ""
    }
  }
}, De = {
  type: "object",
  properties: {
    permissionLevel: {
      type: "string",
      enum: ["org", "board"]
    },
    hideVotes: {
      type: "boolean"
    },
    voting: {
      type: "string",
      enum: ["disabled", "enabled"]
    },
    comments: {
      type: "string"
    },
    invitations: {
      enum: ["admins", "members"]
    },
    selfJoin: {
      type: "boolean"
    },
    cardCovers: {
      type: "boolean"
    },
    isTemplate: {
      type: "boolean"
    },
    cardAging: {
      $ref: "#/components/schemas/CardAging"
    },
    calendarFeedEnabled: {
      type: "boolean"
    },
    background: {
      $ref: "#/components/schemas/TrelloID"
    },
    backgroundImage: {
      type: "string",
      format: "uri"
    },
    backgroundImageScaled: {
      type: "array",
      items: {
        $ref: "#/components/schemas/ImageDescriptor"
      }
    },
    backgroundTile: {
      type: "boolean"
    },
    backgroundBrightness: {
      type: "string",
      example: "dark"
    },
    backgroundBottomColor: {
      type: "string",
      example: "#1e2e00"
    },
    backgroundTopColor: {
      type: "string",
      example: "#ffffff"
    },
    canBePublic: {
      type: "boolean"
    },
    canBeEnterprise: {
      type: "boolean"
    },
    canBeOrg: {
      type: "boolean"
    },
    canBePrivate: {
      type: "boolean"
    },
    canInvite: {
      type: "boolean"
    }
  }
}, Oe = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID",
      example: "5589b47349b40cedc28ceae2"
    },
    name: {
      type: "string",
      example: "My Cards"
    },
    query: {
      type: "string",
      example: "@me"
    },
    pos: {
      $ref: "#/components/schemas/posStringOrNumber",
      example: 1638
    }
  }
}, $e = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID",
      example: "58dd6dcaf8b86744d3cb4cde"
    },
    name: {
      type: "string",
      example: "My Collection"
    }
  }
}, je = {
  type: "object",
  properties: {
    idModel: {
      oneOf: [
        {
          $ref: "#/components/schemas/TrelloID"
        },
        {
          type: "string",
          enum: ["*"]
        }
      ]
    },
    modelType: {
      type: "string",
      enum: ["board", "member", "organization", "enterprise"]
    },
    read: {
      type: "boolean"
    },
    write: {
      type: "boolean"
    }
  }
}, Le = {
  type: "string",
  enum: ["identifier", "idMember", "dateCreated", "dateExpires", "permissions"]
}, Ae = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID",
      example: "5da728c55235b443c5b97181"
    },
    identifier: {
      type: "string",
      example: "App Name"
    },
    idMember: {
      $ref: "#/components/schemas/TrelloID",
      example: "5589c3ea49b40cedc28cf70e"
    },
    dateCreated: {
      type: "string",
      format: "date-time",
      example: "2019-10-16T14:27:17.304Z"
    },
    dateExpires: {
      type: "string",
      format: "date-time",
      example: null,
      nullable: !0
    },
    permissions: {
      type: "array",
      items: {
        $ref: "#/components/schemas/TokenPermission"
      }
    }
  }
}, we = {
  type: "object",
  properties: {
    transferrable: {
      type: "boolean",
      example: !0
    },
    newBillableMembers: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            $ref: "#/components/schemas/TrelloID",
            example: "5ab10be237846c43015f1091"
          },
          fullName: {
            type: "string",
            example: "Bob Loblaw"
          },
          username: {
            type: "string",
            example: "bobloblaw"
          },
          initials: {
            type: "string",
            example: "BL"
          },
          avatarHash: {
            type: "string",
            example: "fc8faaaee46666a4eb8b626c08933e16"
          }
        }
      }
    },
    restrictedMembers: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            $ref: "#/components/schemas/TrelloID",
            example: "5ab10be237846c43015f1091"
          },
          fullName: {
            type: "string",
            example: "Bob Loblaw"
          },
          username: {
            type: "string",
            example: "bobloblaw"
          },
          initials: {
            type: "string",
            example: "BL"
          },
          avatarHash: {
            type: "string",
            example: "fc8faaaee46666a4eb8b626c08933e16"
          }
        }
      }
    }
  }
}, _e = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TrelloID",
      example: "58dd6dcaf8b86744d3cb4cde"
    },
    description: {
      type: "string",
      example: "Board Webhook"
    },
    idModel: {
      $ref: "#/components/schemas/TrelloID",
      example: "59cd149051aa57a706962996"
    },
    callbackURL: {
      type: "string",
      format: "url",
      example: "https://mywebhookurl.com/?type=board"
    },
    active: {
      type: "boolean",
      example: !0
    },
    consecutiveFailures: {
      type: "number",
      example: 0
    },
    firstConsecutiveFailDate: {
      type: "string",
      format: "date",
      nullable: !0,
      example: null
    }
  }
}, Ge = {
  type: "object",
  properties: {
    code: {
      type: "string"
    },
    message: {
      type: "string"
    }
  },
  required: ["code", "message"]
}, Fe = {
  type: "object",
  properties: {
    number: {
      type: "string"
    }
  }
}, Ue = {
  type: "object",
  properties: {
    value: {
      type: "object"
    }
  }
}, p = (i) => typeof i == "string", b = (i) => p(i) && i !== "", h = (i) => i instanceof Blob, T = (i) => i instanceof FormData, S = (i) => {
  try {
    return btoa(i);
  } catch {
    return Buffer.from(i).toString("base64");
  }
}, v = (i) => {
  const e = [], s = (o, d) => {
    e.push(`${encodeURIComponent(o)}=${encodeURIComponent(String(d))}`);
  }, n = (o, d) => {
    d != null && (d instanceof Date ? s(o, d.toISOString()) : Array.isArray(d) ? d.forEach((a) => n(o, a)) : typeof d == "object" ? Object.entries(d).forEach(([a, l]) => n(`${o}[${a}]`, l)) : s(o, d));
  };
  return Object.entries(i).forEach(([o, d]) => n(o, d)), e.length ? `?${e.join("&")}` : "";
}, B = (i, e) => {
  const s = i.ENCODE_PATH || encodeURI, n = e.url.replace("{api-version}", i.VERSION).replace(/{(.*?)}/g, (d, a) => {
    var l;
    return (l = e.path) != null && l.hasOwnProperty(a) ? s(String(e.path[a])) : d;
  }), o = i.BASE + n;
  return e.query ? o + v(e.query) : o;
}, M = (i) => {
  if (i.formData) {
    const e = new FormData(), s = (n, o) => {
      p(o) || h(o) ? e.append(n, o) : e.append(n, JSON.stringify(o));
    };
    return Object.entries(i.formData).filter(([, n]) => n != null).forEach(([n, o]) => {
      Array.isArray(o) ? o.forEach((d) => s(n, d)) : s(n, o);
    }), e;
  }
}, u = async (i, e) => typeof e == "function" ? e(i) : e, q = async (i, e) => {
  const [s, n, o, d] = await Promise.all([
    u(e, i.TOKEN),
    u(e, i.USERNAME),
    u(e, i.PASSWORD),
    u(e, i.HEADERS)
  ]), a = Object.entries({
    Accept: "application/json",
    ...d,
    ...e.headers
  }).filter(([, l]) => l != null).reduce((l, [c, m]) => ({
    ...l,
    [c]: String(m)
  }), {});
  if (b(s) && (a.Authorization = `Bearer ${s}`), b(n) && b(o)) {
    const l = S(`${n}:${o}`);
    a.Authorization = `Basic ${l}`;
  }
  return e.body !== void 0 && (e.mediaType ? a["Content-Type"] = e.mediaType : h(e.body) ? a["Content-Type"] = e.body.type || "application/octet-stream" : p(e.body) ? a["Content-Type"] = "text/plain" : T(e.body) || (a["Content-Type"] = "application/json")), new Headers(a);
}, P = (i) => {
  var e, s;
  if (i.body !== void 0)
    return (e = i.mediaType) != null && e.includes("application/json") || (s = i.mediaType) != null && s.includes("+json") ? JSON.stringify(i.body) : p(i.body) || h(i.body) || T(i.body) ? i.body : JSON.stringify(i.body);
}, z = async (i, e, s, n, o, d, a) => {
  const l = new AbortController();
  let c = {
    headers: d,
    body: n ?? o,
    method: e.method,
    signal: l.signal
  };
  i.WITH_CREDENTIALS && (c.credentials = i.CREDENTIALS);
  for (const m of i.interceptors.request._fns)
    c = await m(c);
  return a(() => l.abort()), await fetch(s, c);
}, D = (i, e) => {
  if (e) {
    const s = i.headers.get(e);
    if (p(s))
      return s;
  }
}, O = async (i) => {
  if (i.status !== 204)
    try {
      const e = i.headers.get("Content-Type");
      if (e) {
        const s = ["application/octet-stream", "application/pdf", "application/zip", "audio/", "image/", "video/"];
        if (e.includes("application/json") || e.includes("+json"))
          return await i.json();
        if (s.some((n) => e.includes(n)))
          return await i.blob();
        if (e.includes("multipart/form-data"))
          return await i.formData();
        if (e.includes("text/"))
          return await i.text();
      }
    } catch (e) {
      console.error(e);
    }
}, $ = (i, e) => {
  const n = {
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "URI Too Long",
    415: "Unsupported Media Type",
    416: "Range Not Satisfiable",
    417: "Expectation Failed",
    418: "Im a teapot",
    421: "Misdirected Request",
    422: "Unprocessable Content",
    423: "Locked",
    424: "Failed Dependency",
    425: "Too Early",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    451: "Unavailable For Legal Reasons",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    510: "Not Extended",
    511: "Network Authentication Required",
    ...i.errors
  }[e.status];
  if (n)
    throw new f(i, e, n);
  if (!e.ok) {
    const o = e.status ?? "unknown", d = e.statusText ?? "unknown", a = (() => {
      try {
        return JSON.stringify(e.body, null, 2);
      } catch {
        return;
      }
    })();
    throw new f(
      i,
      e,
      `Generic Error: status: ${o}; status text: ${d}; body: ${a}`
    );
  }
}, r = (i, e) => new C(async (s, n, o) => {
  try {
    const d = B(i, e), a = M(e), l = P(e), c = await q(i, e);
    if (!o.isCancelled) {
      let m = await z(i, e, d, l, a, c, o);
      for (const x of i.interceptors.response._fns)
        m = await x(m);
      const I = await O(m), k = D(m, e.responseHeader), y = {
        url: d,
        ok: m.ok,
        status: m.status,
        statusText: m.statusText,
        body: k ?? I
      };
      $(e, y), s(y.body);
    }
  } catch (d) {
    n(d);
  }
});
class Ne {
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
  static getActionsId(e) {
    return r(t, {
      method: "GET",
      url: "/actions/{id}",
      path: {
        id: e.id
      },
      query: {
        display: e.display,
        entities: e.entities,
        fields: e.fields,
        member: e.member,
        member_fields: e.memberFields,
        memberCreator: e.memberCreator,
        memberCreator_fields: e.memberCreatorFields
      }
    });
  }
  /**
   * Update an Action
   * Update a specific Action. Only comment actions can be updated. Used to edit the content of a comment.
   * @param data The data for the request.
   * @param data.text The new text for the comment
   * @param data.id The ID of the Action
   * @returns unknown Success
   * @throws ApiError
   */
  static putActionsId(e) {
    return r(t, {
      method: "PUT",
      url: "/actions/{id}",
      path: {
        id: e.id
      },
      query: {
        text: e.text
      }
    });
  }
  /**
   * Delete an Action
   * Delete a specific action. Only comment actions can be deleted.
   * @param data The data for the request.
   * @param data.id The ID of the Action
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteActionsId(e) {
    return r(t, {
      method: "DELETE",
      url: "/actions/{id}",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Get a specific field on an Action
   * Get a specific property of an action
   * @param data The data for the request.
   * @param data.id The ID of the Action
   * @param data.field An action field
   * @returns Action Success
   * @throws ApiError
   */
  static getActionsIdField(e) {
    return r(t, {
      method: "GET",
      url: "/actions/{id}/{field}",
      path: {
        id: e.id,
        field: e.field
      }
    });
  }
  /**
   * Get the Board for an Action
   * Get the Board for an Action
   * @param data The data for the request.
   * @param data.id The ID of the action
   * @param data.fields `all` or a comma-separated list of board fields
   * @returns Board Success
   * @throws ApiError
   */
  static getActionsIdBoard(e) {
    return r(t, {
      method: "GET",
      url: "/actions/{id}/board",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get the Card for an Action
   * Get the card for an action
   * @param data The data for the request.
   * @param data.id The ID of the action
   * @param data.fields `all` or a comma-separated list of card fields
   * @returns Card Success
   * @throws ApiError
   */
  static getActionsIdCard(e) {
    return r(t, {
      method: "GET",
      url: "/actions/{id}/card",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get the List for an Action
   * Get the List for an Action
   * @param data The data for the request.
   * @param data.id The ID of the action
   * @param data.fields `all` or a comma-separated list of list fields
   * @returns TrelloList Success
   * @throws ApiError
   */
  static getActionsIdList(e) {
    return r(t, {
      method: "GET",
      url: "/actions/{id}/list",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get the Member of an Action
   * Gets the member of an action (not the creator)
   * @param data The data for the request.
   * @param data.id The ID of the Action
   * @param data.fields `all` or a comma-separated list of member fields
   * @returns Member Success
   * @throws ApiError
   */
  static getActionsIdMember(e) {
    return r(t, {
      method: "GET",
      url: "/actions/{id}/member",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get the Member Creator of an Action
   * Get the Member who created the Action
   * @param data The data for the request.
   * @param data.id The ID of the Action
   * @param data.fields `all` or a comma-separated list of member fields
   * @returns Member Success
   * @throws ApiError
   */
  static getActionsIdMembercreator(e) {
    return r(t, {
      method: "GET",
      url: "/actions/{id}/memberCreator",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get the Organization of an Action
   * Get the Organization of an Action
   * @param data The data for the request.
   * @param data.id The ID of the action
   * @param data.fields `all` or a comma-separated list of organization fields
   * @returns Organization Success
   * @throws ApiError
   */
  static getActionsIdOrganization(e) {
    return r(t, {
      method: "GET",
      url: "/actions/{id}/organization",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Update a Comment Action
   * Update a comment action
   * @param data The data for the request.
   * @param data.id The ID of the action to update
   * @param data.value The new text for the comment
   * @returns unknown Success
   * @throws ApiError
   */
  static putActionsIdText(e) {
    return r(t, {
      method: "PUT",
      url: "/actions/{id}/text",
      path: {
        id: e.id
      },
      query: {
        value: e.value
      }
    });
  }
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
  static getActionsIdactionReactions(e) {
    return r(t, {
      method: "GET",
      url: "/actions/{idAction}/reactions",
      path: {
        idAction: e.idAction
      },
      query: {
        member: e.member,
        emoji: e.emoji
      }
    });
  }
  /**
   * Create Reaction for Action
   * Adds a new reaction to an action
   * @param data The data for the request.
   * @param data.idAction The ID of the action
   * @param data.requestBody
   * @returns unknown Success
   * @throws ApiError
   */
  static postActionsIdactionReactions(e) {
    return r(t, {
      method: "POST",
      url: "/actions/{idAction}/reactions",
      path: {
        idAction: e.idAction
      },
      body: e.requestBody,
      mediaType: "application/json"
    });
  }
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
  static getActionsIdactionReactionsId(e) {
    return r(t, {
      method: "GET",
      url: "/actions/{idAction}/reactions/{id}",
      path: {
        idAction: e.idAction,
        id: e.id
      },
      query: {
        member: e.member,
        emoji: e.emoji
      }
    });
  }
  /**
   * Delete Action's Reaction
   * Deletes a reaction
   * @param data The data for the request.
   * @param data.idAction The ID of the Action
   * @param data.id The ID of the reaction
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteActionsIdactionReactionsId(e) {
    return r(t, {
      method: "DELETE",
      url: "/actions/{idAction}/reactions/{id}",
      path: {
        idAction: e.idAction,
        id: e.id
      }
    });
  }
  /**
   * List Action's summary of Reactions
   * List a summary of all reactions for an action
   * @param data The data for the request.
   * @param data.idAction The ID of the action
   * @returns unknown Success
   * @throws ApiError
   */
  static getActionsIdactionReactionsummary(e) {
    return r(t, {
      method: "GET",
      url: "/actions/{idAction}/reactionsSummary",
      path: {
        idAction: e.idAction
      }
    });
  }
  /**
   * Get Application's compliance data
   * @param data The data for the request.
   * @param data.key
   * @returns unknown Success
   * @throws ApiError
   */
  static applicationsKeyCompliance(e) {
    return r(t, {
      method: "GET",
      url: "/applications/{key}/compliance",
      path: {
        key: e.key
      }
    });
  }
  /**
   * Batch Requests
   * Make up to 10 GET requests in a single, batched API call.
   * @param data The data for the request.
   * @param data.urls A list of API routes. Maximum of 10 routes allowed. The routes should begin with a forward slash and should not include the API version number - e.g. "urls=/members/trello,/cards/[cardId]"
   * @returns unknown Success
   * @throws ApiError
   */
  static getBatch(e) {
    return r(t, {
      method: "GET",
      url: "/batch",
      query: {
        urls: e.urls
      }
    });
  }
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
  static getBoardsIdMemberships(e) {
    return r(t, {
      method: "GET",
      url: "/boards/{id}/memberships",
      path: {
        id: e.id
      },
      query: {
        filter: e.filter,
        activity: e.activity,
        orgMemberType: e.orgMemberType,
        member: e.member,
        member_fields: e.memberFields
      }
    });
  }
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
  static getBoardsId(e) {
    return r(t, {
      method: "GET",
      url: "/boards/{id}",
      path: {
        id: e.id
      },
      query: {
        actions: e.actions,
        boardStars: e.boardStars,
        cards: e.cards,
        card_pluginData: e.cardPluginData,
        checklists: e.checklists,
        customFields: e.customFields,
        fields: e.fields,
        labels: e.labels,
        lists: e.lists,
        members: e.members,
        memberships: e.memberships,
        pluginData: e.pluginData,
        organization: e.organization,
        organization_pluginData: e.organizationPluginData,
        myPrefs: e.myPrefs,
        tags: e.tags
      },
      errors: {
        401: "Unauthorized",
        404: "The specified resource was not found"
      }
    });
  }
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
  static putBoardsId(e) {
    return r(t, {
      method: "PUT",
      url: "/boards/{id}",
      path: {
        id: e.id
      },
      query: {
        name: e.name,
        desc: e.desc,
        closed: e.closed,
        subscribed: e.subscribed,
        idOrganization: e.idOrganization,
        "prefs/permissionLevel": e.prefsPermissionLevel,
        "prefs/selfJoin": e.prefsSelfJoin,
        "prefs/cardCovers": e.prefsCardCovers,
        "prefs/hideVotes": e.prefsHideVotes,
        "prefs/invitations": e.prefsInvitations,
        "prefs/voting": e.prefsVoting,
        "prefs/comments": e.prefsComments,
        "prefs/background": e.prefsBackground,
        "prefs/cardAging": e.prefsCardAging,
        "prefs/calendarFeedEnabled": e.prefsCalendarFeedEnabled,
        "labelNames/green": e.labelNamesGreen,
        "labelNames/yellow": e.labelNamesYellow,
        "labelNames/orange": e.labelNamesOrange,
        "labelNames/red": e.labelNamesRed,
        "labelNames/purple": e.labelNamesPurple,
        "labelNames/blue": e.labelNamesBlue
      }
    });
  }
  /**
   * Delete a Board
   * Delete a board.
   * @param data The data for the request.
   * @param data.id The id of the board to delete
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteBoardsId(e) {
    return r(t, {
      method: "DELETE",
      url: "/boards/{id}",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Get a field on a Board
   * Get a single, specific field on a board
   * @param data The data for the request.
   * @param data.id The ID of the board.
   * @param data.field The field you'd like to receive. Valid values: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
   * @returns unknown Success
   * @throws ApiError
   */
  static getBoardsIdField(e) {
    return r(t, {
      method: "GET",
      url: "/boards/{id}/{field}",
      path: {
        id: e.id,
        field: e.field
      }
    });
  }
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
  static getBoardsIdActions(e) {
    return r(t, {
      method: "GET",
      url: "/boards/{boardId}/actions",
      path: {
        boardId: e.boardId
      },
      query: {
        fields: e.fields,
        filter: e.filter,
        format: e.format,
        idModels: e.idModels,
        limit: e.limit,
        member: e.member,
        member_fields: e.memberFields,
        memberCreator: e.memberCreator,
        memberCreator_fields: e.memberCreatorFields,
        page: e.page,
        reactions: e.reactions,
        before: e.before,
        since: e.since
      }
    });
  }
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
  static getBoardsIdCardsIdcard(e) {
    return r(t, {
      method: "GET",
      url: "/boards/{id}/cards/{idCard}",
      path: {
        id: e.id,
        idCard: e.idCard
      },
      query: {
        fields: e.fields,
        filter: e.filter,
        format: e.format,
        idModels: e.idModels,
        limit: e.limit,
        member: e.member,
        member_fields: e.memberFields,
        memberCreator: e.memberCreator,
        memberCreator_fields: e.memberCreatorFields,
        page: e.page,
        reactions: e.reactions,
        before: e.before,
        since: e.since
      }
    });
  }
  /**
   * Get boardStars on a Board
   * @param data The data for the request.
   * @param data.boardId
   * @param data.filter Valid values: mine, none
   * @returns unknown Success
   * @throws ApiError
   */
  static getBoardsIdBoardstars(e) {
    return r(t, {
      method: "GET",
      url: "/boards/{boardId}/boardStars",
      path: {
        boardId: e.boardId
      },
      query: {
        filter: e.filter
      }
    });
  }
  /**
   * Get Checklists on a Board
   * Get all of the checklists on a Board.
   * @param data The data for the request.
   * @param data.id The ID of the board
   * @returns unknown Success
   * @throws ApiError
   */
  static boardsIdChecklists(e) {
    return r(t, {
      method: "GET",
      url: "/boards/{id}/checklists",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Get Cards on a Board
   * Get all of the open Cards on a Board.
   * @param data The data for the request.
   * @param data.id
   * @returns unknown Success
   * @throws ApiError
   */
  static getBoardsIdCards(e) {
    return r(t, {
      method: "GET",
      url: "/boards/{id}/cards",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Get filtered Cards on a Board
   * Get the Cards on a Board that match a given filter.
   * @param data The data for the request.
   * @param data.id ID of the Board
   * @param data.filter Valid Values: all, closed, none, open, visible.
   * @returns unknown Success
   * @throws ApiError
   */
  static getBoardsIdCardsFilter(e) {
    return r(t, {
      method: "GET",
      url: "/boards/{id}/cards/{filter}",
      path: {
        id: e.id,
        filter: e.filter
      }
    });
  }
  /**
   * Get Custom Fields for Board
   * Get the Custom Field Definitions that exist on a board.
   * @param data The data for the request.
   * @param data.id The ID of the board
   * @returns CustomField Success
   * @throws ApiError
   */
  static getBoardsIdCustomfields(e) {
    return r(t, {
      method: "GET",
      url: "/boards/{id}/customFields",
      path: {
        id: e.id
      }
    });
  }
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
  static getBoardsIdLabels(e) {
    return r(t, {
      method: "GET",
      url: "/boards/{id}/labels",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields,
        limit: e.limit
      }
    });
  }
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
  static postBoardsIdLabels(e) {
    return r(t, {
      method: "POST",
      url: "/boards/{id}/labels",
      path: {
        id: e.id
      },
      query: {
        name: e.name,
        color: e.color
      }
    });
  }
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
  static getBoardsIdLists(e) {
    return r(t, {
      method: "GET",
      url: "/boards/{id}/lists",
      path: {
        id: e.id
      },
      query: {
        cards: e.cards,
        card_fields: e.cardFields,
        filter: e.filter,
        fields: e.fields
      }
    });
  }
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
  static postBoardsIdLists(e) {
    return r(t, {
      method: "POST",
      url: "/boards/{id}/lists",
      path: {
        id: e.id
      },
      query: {
        name: e.name,
        pos: e.pos
      }
    });
  }
  /**
   * Get filtered Lists on a Board
   * @param data The data for the request.
   * @param data.id The ID of the board
   * @param data.filter One of `all`, `closed`, `none`, `open`
   * @returns unknown Success
   * @throws ApiError
   */
  static getBoardsIdListsFilter(e) {
    return r(t, {
      method: "GET",
      url: "/boards/{id}/lists/{filter}",
      path: {
        id: e.id,
        filter: e.filter
      }
    });
  }
  /**
   * Get the Members of a Board
   * Get the Members for a board
   * @param data The data for the request.
   * @param data.id The ID of the board
   * @returns unknown Success
   * @throws ApiError
   */
  static getBoardsIdMembers(e) {
    return r(t, {
      method: "GET",
      url: "/boards/{id}/members",
      path: {
        id: e.id
      }
    });
  }
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
  static putBoardsIdMembers(e) {
    return r(t, {
      method: "PUT",
      url: "/boards/{id}/members",
      path: {
        id: e.id
      },
      query: {
        email: e.email,
        type: e.type
      },
      body: e.requestBody,
      mediaType: "application/json"
    });
  }
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
  static putBoardsIdMembersIdmember(e) {
    return r(t, {
      method: "PUT",
      url: "/boards/{id}/members/{idMember}",
      path: {
        id: e.id,
        idMember: e.idMember
      },
      query: {
        type: e.type,
        allowBillableGuest: e.allowBillableGuest
      }
    });
  }
  /**
   * Remove Member from Board
   * @param data The data for the request.
   * @param data.id The id of the board to update
   * @param data.idMember The id of the member to add to the board.
   * @returns unknown Success
   * @throws ApiError
   */
  static boardsidmembersidmember(e) {
    return r(t, {
      method: "DELETE",
      url: "/boards/{id}/members/{idMember}",
      path: {
        id: e.id,
        idMember: e.idMember
      }
    });
  }
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
  static putBoardsIdMembershipsIdmembership(e) {
    return r(t, {
      method: "PUT",
      url: "/boards/{id}/memberships/{idMembership}",
      path: {
        id: e.id,
        idMembership: e.idMembership
      },
      query: {
        type: e.type,
        member_fields: e.memberFields
      }
    });
  }
  /**
   * Update emailPosition Pref on a Board
   * Update emailPosition Pref on a Board
   * @param data The data for the request.
   * @param data.id The id of the board to update
   * @param data.value Valid values: bottom, top. Determines the position of the email address.
   * @returns unknown Success
   * @throws ApiError
   */
  static putBoardsIdMyprefsEmailposition(e) {
    return r(t, {
      method: "PUT",
      url: "/boards/{id}/myPrefs/emailPosition",
      path: {
        id: e.id
      },
      query: {
        value: e.value
      }
    });
  }
  /**
   * Update idEmailList Pref on a Board
   * Change the default list that email-to-board cards are created in.
   * @param data The data for the request.
   * @param data.id The id of the board to update
   * @param data.value The id of an email list.
   * @returns unknown Success
   * @throws ApiError
   */
  static putBoardsIdMyprefsIdemaillist(e) {
    return r(t, {
      method: "PUT",
      url: "/boards/{id}/myPrefs/idEmailList",
      path: {
        id: e.id
      },
      query: {
        value: e.value
      }
    });
  }
  /**
   * Update showListGuide Pref on a Board
   * @param data The data for the request.
   * @param data.id The id of the board to update
   * @param data.value Determines whether to show the list guide.
   * @returns unknown Success
   * @throws ApiError
   */
  static putBoardsIdMyPrefsShowlistguide(e) {
    return r(t, {
      method: "PUT",
      url: "/boards/{id}/myPrefs/showListGuide",
      path: {
        id: e.id
      },
      query: {
        value: e.value
      }
    });
  }
  /**
   * Update showSidebar Pref on a Board
   * @param data The data for the request.
   * @param data.id The id of the board to update
   * @param data.value Determines whether to show the side bar.
   * @returns unknown Success
   * @throws ApiError
   */
  static putBoardsIdMyPrefsShowsidebar(e) {
    return r(t, {
      method: "PUT",
      url: "/boards/{id}/myPrefs/showSidebar",
      path: {
        id: e.id
      },
      query: {
        value: e.value
      }
    });
  }
  /**
   * Update showSidebarActivity Pref on a Board
   * @param data The data for the request.
   * @param data.id The id of the board to update
   * @param data.value Determines whether to show sidebar activity.
   * @returns unknown Success
   * @throws ApiError
   */
  static putBoardsIdMyPrefsShowsidebaractivity(e) {
    return r(t, {
      method: "PUT",
      url: "/boards/{id}/myPrefs/showSidebarActivity",
      path: {
        id: e.id
      },
      query: {
        value: e.value
      }
    });
  }
  /**
   * Update showSidebarBoardActions Pref on a Board
   * @param data The data for the request.
   * @param data.id The id of the board to update
   * @param data.value Determines whether to show the sidebar board actions.
   * @returns unknown Success
   * @throws ApiError
   */
  static putBoardsIdMyPrefsShowsidebarboardactions(e) {
    return r(t, {
      method: "PUT",
      url: "/boards/{id}/myPrefs/showSidebarBoardActions",
      path: {
        id: e.id
      },
      query: {
        value: e.value
      }
    });
  }
  /**
   * Update showSidebarMembers Pref on a Board
   * @param data The data for the request.
   * @param data.id The id of the board to update
   * @param data.value Determines whether to show members of the board in the sidebar.
   * @returns unknown Success
   * @throws ApiError
   */
  static putBoardsIdMyPrefsShowsidebarmembers(e) {
    return r(t, {
      method: "PUT",
      url: "/boards/{id}/myPrefs/showSidebarMembers",
      path: {
        id: e.id
      },
      query: {
        value: e.value
      }
    });
  }
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
  static postBoards(e) {
    return r(t, {
      method: "POST",
      url: "/boards/",
      query: {
        name: e.name,
        defaultLabels: e.defaultLabels,
        defaultLists: e.defaultLists,
        desc: e.desc,
        idOrganization: e.idOrganization,
        idBoardSource: e.idBoardSource,
        keepFromSource: e.keepFromSource,
        powerUps: e.powerUps,
        prefs_permissionLevel: e.prefsPermissionLevel,
        prefs_voting: e.prefsVoting,
        prefs_comments: e.prefsComments,
        prefs_invitations: e.prefsInvitations,
        prefs_selfJoin: e.prefsSelfJoin,
        prefs_cardCovers: e.prefsCardCovers,
        prefs_background: e.prefsBackground,
        prefs_cardAging: e.prefsCardAging
      }
    });
  }
  /**
   * Create a calendarKey for a Board
   * Create a new board.
   * @param data The data for the request.
   * @param data.id The id of the board to update
   * @returns unknown Success
   * @throws ApiError
   */
  static postBoardsIdCalendarkeyGenerate(e) {
    return r(t, {
      method: "POST",
      url: "/boards/{id}/calendarKey/generate",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Create a emailKey for a Board
   * @param data The data for the request.
   * @param data.id The id of the board to update
   * @returns unknown Success
   * @throws ApiError
   */
  static postBoardsIdEmailkeyGenerate(e) {
    return r(t, {
      method: "POST",
      url: "/boards/{id}/emailKey/generate",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Create a Tag for a Board
   * @param data The data for the request.
   * @param data.id The id of the board to update
   * @param data.value The id of a tag from the organization to which this board belongs.
   * @returns unknown Success
   * @throws ApiError
   */
  static postBoardsIdIdtags(e) {
    return r(t, {
      method: "POST",
      url: "/boards/{id}/idTags",
      path: {
        id: e.id
      },
      query: {
        value: e.value
      }
    });
  }
  /**
   * Mark Board as viewed
   * @param data The data for the request.
   * @param data.id The id of the board to update
   * @returns unknown Success
   * @throws ApiError
   */
  static postBoardsIdMarkedasviewed(e) {
    return r(t, {
      method: "POST",
      url: "/boards/{id}/markedAsViewed",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Get Enabled Power-Ups on Board
   * Get the enabled Power-Ups on a board
   * @param data The data for the request.
   * @param data.id The ID of the Board
   * @returns Plugin Success
   * @throws ApiError
   */
  static getBoardsIdBoardplugins(e) {
    return r(t, {
      method: "GET",
      url: "/boards/{id}/boardPlugins",
      path: {
        id: e.id
      }
    });
  }
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
  static postBoardsIdBoardplugins(e) {
    return r(t, {
      method: "POST",
      url: "/boards/{id}/boardPlugins",
      path: {
        id: e.id
      },
      query: {
        idPlugin: e.idPlugin
      }
    });
  }
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
  static deleteBoardsIdBoardplugins(e) {
    return r(t, {
      method: "DELETE",
      url: "/boards/{id}/boardPlugins/{idPlugin}",
      path: {
        id: e.id,
        idPlugin: e.idPlugin
      }
    });
  }
  /**
   * Get Power-Ups on a Board
   * List the Power-Ups on a board
   * @param data The data for the request.
   * @param data.id The ID of the board
   * @param data.filter One of: `enabled` or `available`
   * @returns Plugin Success
   * @throws ApiError
   */
  static getBoardIdPlugins(e) {
    return r(t, {
      method: "GET",
      url: "/boards/{id}/plugins",
      path: {
        id: e.id
      },
      query: {
        filter: e.filter
      }
    });
  }
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
  static postCards(e) {
    return r(t, {
      method: "POST",
      url: "/cards",
      query: {
        name: e.name,
        desc: e.desc,
        pos: e.pos,
        due: e.due,
        start: e.start,
        dueComplete: e.dueComplete,
        idList: e.idList,
        idMembers: e.idMembers,
        idLabels: e.idLabels,
        urlSource: e.urlSource,
        fileSource: e.fileSource,
        mimeType: e.mimeType,
        idCardSource: e.idCardSource,
        keepFromSource: e.keepFromSource,
        address: e.address,
        locationName: e.locationName,
        coordinates: e.coordinates
      }
    });
  }
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
  static getCardsId(e) {
    return r(t, {
      method: "GET",
      url: "/cards/{id}",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields,
        actions: e.actions,
        attachments: e.attachments,
        attachment_fields: e.attachmentFields,
        members: e.members,
        member_fields: e.memberFields,
        membersVoted: e.membersVoted,
        memberVoted_fields: e.memberVotedFields,
        checkItemStates: e.checkItemStates,
        checklists: e.checklists,
        checklist_fields: e.checklistFields,
        board: e.board,
        board_fields: e.boardFields,
        list: e.list,
        pluginData: e.pluginData,
        stickers: e.stickers,
        sticker_fields: e.stickerFields,
        customFieldItems: e.customFieldItems
      }
    });
  }
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
  static putCardsId(e) {
    return r(t, {
      method: "PUT",
      url: "/cards/{id}",
      path: {
        id: e.id
      },
      query: {
        name: e.name,
        desc: e.desc,
        closed: e.closed,
        idMembers: e.idMembers,
        idAttachmentCover: e.idAttachmentCover,
        idList: e.idList,
        idLabels: e.idLabels,
        idBoard: e.idBoard,
        pos: e.pos,
        due: e.due,
        start: e.start,
        dueComplete: e.dueComplete,
        subscribed: e.subscribed,
        address: e.address,
        locationName: e.locationName,
        coordinates: e.coordinates,
        cover: e.cover
      }
    });
  }
  /**
   * Delete a Card
   * Delete a Card
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteCardsId(e) {
    return r(t, {
      method: "DELETE",
      url: "/cards/{id}",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Get a field on a Card
   * Get a specific property of a card
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.field The desired field.
   * @returns Card Success
   * @throws ApiError
   */
  static getCardsIdField(e) {
    return r(t, {
      method: "GET",
      url: "/cards/{id}/{field}",
      path: {
        id: e.id,
        field: e.field
      }
    });
  }
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
  static getCardsIdActions(e) {
    return r(t, {
      method: "GET",
      url: "/cards/{id}/actions",
      path: {
        id: e.id
      },
      query: {
        filter: e.filter,
        page: e.page
      }
    });
  }
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
  static getCardsIdAttachments(e) {
    return r(t, {
      method: "GET",
      url: "/cards/{id}/attachments",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields,
        filter: e.filter
      }
    });
  }
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
  static postCardsIdAttachments(e) {
    return r(t, {
      method: "POST",
      url: "/cards/{id}/attachments",
      path: {
        id: e.id
      },
      query: {
        name: e.name,
        file: e.file,
        mimeType: e.mimeType,
        url: e.url,
        setCover: e.setCover
      }
    });
  }
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
  static getCardsIdAttachmentsIdattachment(e) {
    return r(t, {
      method: "GET",
      url: "/cards/{id}/attachments/{idAttachment}",
      path: {
        id: e.id,
        idAttachment: e.idAttachment
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Delete an Attachment on a Card
   * Delete an Attachment
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.idAttachment The ID of the attachment to delete
   * @returns unknown Success
   * @throws ApiError
   */
  static deletedCardsIdAttachmentsIdattachment(e) {
    return r(t, {
      method: "DELETE",
      url: "/cards/{id}/attachments/{idAttachment}",
      path: {
        id: e.id,
        idAttachment: e.idAttachment
      }
    });
  }
  /**
   * Get the Board the Card is on
   * Get the board a card is on
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object)
   * @returns unknown Success
   * @throws ApiError
   */
  static getCardsIdBoard(e) {
    return r(t, {
      method: "GET",
      url: "/cards/{id}/board",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get checkItems on a Card
   * Get the completed checklist items on a card
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.fields `all` or a comma-separated list of: `idCheckItem`, `state`
   * @returns unknown Success
   * @throws ApiError
   */
  static getCardsIdCheckitemstates(e) {
    return r(t, {
      method: "GET",
      url: "/cards/{id}/checkItemStates",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
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
  static getCardsIdChecklists(e) {
    return r(t, {
      method: "GET",
      url: "/cards/{id}/checklists",
      path: {
        id: e.id
      },
      query: {
        checkItems: e.checkItems,
        checkItem_fields: e.checkItemFields,
        filter: e.filter,
        fields: e.fields
      }
    });
  }
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
  static postCardsIdChecklists(e) {
    return r(t, {
      method: "POST",
      url: "/cards/{id}/checklists",
      path: {
        id: e.id
      },
      query: {
        name: e.name,
        idChecklistSource: e.idChecklistSource,
        pos: e.pos
      }
    });
  }
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
  static getCardsIdCheckitemIdcheckitem(e) {
    return r(t, {
      method: "GET",
      url: "/cards/{id}/checkItem/{idCheckItem}",
      path: {
        id: e.id,
        idCheckItem: e.idCheckItem
      },
      query: {
        fields: e.fields
      }
    });
  }
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
  static putCardsIdCheckitemIdcheckitem(e) {
    return r(t, {
      method: "PUT",
      url: "/cards/{id}/checkItem/{idCheckItem}",
      path: {
        id: e.id,
        idCheckItem: e.idCheckItem
      },
      query: {
        name: e.name,
        state: e.state,
        idChecklist: e.idChecklist,
        pos: e.pos,
        due: e.due,
        dueReminder: e.dueReminder,
        idMember: e.idMember
      }
    });
  }
  /**
   * Delete checkItem on a Card
   * Delete a checklist item
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.idCheckItem The ID of the checkitem
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteCardsIdCheckitemIdcheckitem(e) {
    return r(t, {
      method: "DELETE",
      url: "/cards/{id}/checkItem/{idCheckItem}",
      path: {
        id: e.id,
        idCheckItem: e.idCheckItem
      }
    });
  }
  /**
   * Get the List of a Card
   * Get the list a card is in
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.fields `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
   * @returns unknown Success
   * @throws ApiError
   */
  static getCardsIdList(e) {
    return r(t, {
      method: "GET",
      url: "/cards/{id}/list",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get the Members of a Card
   * Get the members on a card
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
   * @returns unknown Success
   * @throws ApiError
   */
  static getCardsIdMembers(e) {
    return r(t, {
      method: "GET",
      url: "/cards/{id}/members",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get Members who have voted on a Card
   * Get the members who have voted on a card
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
   * @returns unknown Success
   * @throws ApiError
   */
  static getCardsIdMembersvoted(e) {
    return r(t, {
      method: "GET",
      url: "/cards/{id}/membersVoted",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Add Member vote to Card
   * Vote on the card for a given member.
   * @param data The data for the request.
   * @param data.value The ID of the member to vote 'yes' on the card
   * @param data.id The ID of the Card
   * @returns unknown Success
   * @throws ApiError
   */
  static cardsidmembersvoted1(e) {
    return r(t, {
      method: "POST",
      url: "/cards/{id}/membersVoted",
      path: {
        id: e.id
      },
      query: {
        value: e.value
      }
    });
  }
  /**
   * Get pluginData on a Card
   * Get any shared pluginData on a card.
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @returns unknown Success
   * @throws ApiError
   */
  static getCardsIdPlugindata(e) {
    return r(t, {
      method: "GET",
      url: "/cards/{id}/pluginData",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Get Stickers on a Card
   * Get the stickers on a card
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.fields `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
   * @returns unknown Success
   * @throws ApiError
   */
  static getCardsIdStickers(e) {
    return r(t, {
      method: "GET",
      url: "/cards/{id}/stickers",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
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
  static postCardsIdStickers(e) {
    return r(t, {
      method: "POST",
      url: "/cards/{id}/stickers",
      path: {
        id: e.id
      },
      query: {
        image: e.image,
        top: e.top,
        left: e.left,
        zIndex: e.zIndex,
        rotate: e.rotate
      }
    });
  }
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
  static getCardsIdStickersIdsticker(e) {
    return r(t, {
      method: "GET",
      url: "/cards/{id}/stickers/{idSticker}",
      path: {
        id: e.id,
        idSticker: e.idSticker
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Delete a Sticker on a Card
   * Remove a sticker from the card
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.idSticker The ID of the sticker
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteCardsIdStickersIdsticker(e) {
    return r(t, {
      method: "DELETE",
      url: "/cards/{id}/stickers/{idSticker}",
      path: {
        id: e.id,
        idSticker: e.idSticker
      }
    });
  }
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
  static putCardsIdStickersIdsticker(e) {
    return r(t, {
      method: "PUT",
      url: "/cards/{id}/stickers/{idSticker}",
      path: {
        id: e.id,
        idSticker: e.idSticker
      },
      query: {
        top: e.top,
        left: e.left,
        zIndex: e.zIndex,
        rotate: e.rotate
      }
    });
  }
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
  static putCardsIdActionsIdactionComments(e) {
    return r(t, {
      method: "PUT",
      url: "/cards/{id}/actions/{idAction}/comments",
      path: {
        id: e.id,
        idAction: e.idAction
      },
      query: {
        text: e.text
      }
    });
  }
  /**
   * Delete a comment on a Card
   * Delete a comment
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.idAction The ID of the comment action to update
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteCardsIdActionsIdComments(e) {
    return r(t, {
      method: "DELETE",
      url: "/cards/{id}/actions/{idAction}/comments",
      path: {
        id: e.id,
        idAction: e.idAction
      }
    });
  }
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
  static putCardsIdcardCustomfieldIdcustomfieldItem(e) {
    return r(t, {
      method: "PUT",
      url: "/cards/{idCard}/customField/{idCustomField}/item",
      path: {
        idCard: e.idCard,
        idCustomField: e.idCustomField
      },
      body: e.requestBody,
      mediaType: "application/json"
    });
  }
  /**
   * Update Multiple Custom Field items on Card
   * Setting, updating, and removing the values for multiple Custom Fields on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)
   * @param data The data for the request.
   * @param data.requestBody
   * @returns unknown Success
   * @throws ApiError
   */
  static putCardsIdcardCustomfields(e = {}) {
    return r(t, {
      method: "PUT",
      url: "/cards/{idCard}/customFields",
      body: e.requestBody,
      mediaType: "application/json"
    });
  }
  /**
   * Get Custom Field Items for a Card
   * Get the custom field items for a card.
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @returns CustomFieldItems Success
   * @throws ApiError
   */
  static getCardsIdCustomfielditems(e) {
    return r(t, {
      method: "GET",
      url: "/cards/{id}/customFieldItems",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Add a new comment to a Card
   * Add a new comment to a card
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.text The comment
   * @returns Action Success
   * @throws ApiError
   */
  static postCardsIdActionsComments(e) {
    return r(t, {
      method: "POST",
      url: "/cards/{id}/actions/comments",
      path: {
        id: e.id
      },
      query: {
        text: e.text
      }
    });
  }
  /**
   * Add a Label to a Card
   * Add a label to a card
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.value The ID of the label to add
   * @returns unknown Success
   * @throws ApiError
   */
  static postCardsIdIdlabels(e) {
    return r(t, {
      method: "POST",
      url: "/cards/{id}/idLabels",
      path: {
        id: e.id
      },
      query: {
        value: e.value
      }
    });
  }
  /**
   * Add a Member to a Card
   * Add a member to a card
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.value The ID of the Member to add to the card
   * @returns unknown Success
   * @throws ApiError
   */
  static postCardsIdIdmembers(e) {
    return r(t, {
      method: "POST",
      url: "/cards/{id}/idMembers",
      path: {
        id: e.id
      },
      query: {
        value: e.value
      }
    });
  }
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
  static postCardsIdLabels(e) {
    return r(t, {
      method: "POST",
      url: "/cards/{id}/labels",
      path: {
        id: e.id
      },
      query: {
        color: e.color,
        name: e.name
      }
    });
  }
  /**
   * Mark a Card's Notifications as read
   * Mark notifications about this card as read
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @returns unknown Success
   * @throws ApiError
   */
  static postCardsIdMarkassociatednotificationsread(e) {
    return r(t, {
      method: "POST",
      url: "/cards/{id}/markAssociatedNotificationsRead",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Remove a Label from a Card
   * Remove a label from a card
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.idLabel The ID of the label to remove
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteCardsIdIdlabelsIdlabel(e) {
    return r(t, {
      method: "DELETE",
      url: "/cards/{id}/idLabels/{idLabel}",
      path: {
        id: e.id,
        idLabel: e.idLabel
      }
    });
  }
  /**
   * Remove a Member from a Card
   * Remove a member from a card
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.idMember The ID of the member to remove from the card
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteIdIdmembersIdmember(e) {
    return r(t, {
      method: "DELETE",
      url: "/cards/{id}/idMembers/{idMember}",
      path: {
        id: e.id,
        idMember: e.idMember
      }
    });
  }
  /**
   * Remove a Member's Vote on a Card
   * Remove a member's vote from a card
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.idMember The ID of the member whose vote to remove
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteCardsIdMembersvotedIdmember(e) {
    return r(t, {
      method: "DELETE",
      url: "/cards/{id}/membersVoted/{idMember}",
      path: {
        id: e.id,
        idMember: e.idMember
      }
    });
  }
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
  static putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem(e) {
    return r(t, {
      method: "PUT",
      url: "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}",
      path: {
        idCard: e.idCard,
        idCheckItem: e.idCheckItem,
        idChecklist: e.idChecklist
      },
      query: {
        pos: e.pos
      }
    });
  }
  /**
   * Delete a Checklist on a Card
   * Delete a checklist from a card
   * @param data The data for the request.
   * @param data.id The ID of the Card
   * @param data.idChecklist The ID of the checklist to delete
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteCardsIdChecklistsIdchecklist(e) {
    return r(t, {
      method: "DELETE",
      url: "/cards/{id}/checklists/{idChecklist}",
      path: {
        id: e.id,
        idChecklist: e.idChecklist
      }
    });
  }
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
  static postChecklists(e) {
    return r(t, {
      method: "POST",
      url: "/checklists",
      query: {
        idCard: e.idCard,
        name: e.name,
        pos: e.pos,
        idChecklistSource: e.idChecklistSource
      }
    });
  }
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
  static getChecklistsId(e) {
    return r(t, {
      method: "GET",
      url: "/checklists/{id}",
      path: {
        id: e.id
      },
      query: {
        cards: e.cards,
        checkItems: e.checkItems,
        checkItem_fields: e.checkItemFields,
        fields: e.fields
      }
    });
  }
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
  static putCheclistsId(e) {
    return r(t, {
      method: "PUT",
      url: "/checklists/{id}",
      path: {
        id: e.id
      },
      query: {
        name: e.name,
        pos: e.pos
      }
    });
  }
  /**
   * Delete a Checklist
   * Delete a checklist
   * @param data The data for the request.
   * @param data.id ID of a checklist.
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteChecklistsId(e) {
    return r(t, {
      method: "DELETE",
      url: "/checklists/{id}",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Get field on a Checklist
   * @param data The data for the request.
   * @param data.id ID of a checklist.
   * @param data.field Field to update.
   * @returns unknown Success
   * @throws ApiError
   */
  static getChecklistsIdField(e) {
    return r(t, {
      method: "GET",
      url: "/checklists/{id}/{field}",
      path: {
        id: e.id,
        field: e.field
      }
    });
  }
  /**
   * Update field on a Checklist
   * @param data The data for the request.
   * @param data.value The value to change the checklist name to. Should be a string of length 1 to 16384.
   * @param data.id ID of a checklist.
   * @param data.field Field to update.
   * @returns unknown Success
   * @throws ApiError
   */
  static putChecklistsIdField(e) {
    return r(t, {
      method: "PUT",
      url: "/checklists/{id}/{field}",
      path: {
        id: e.id,
        field: e.field
      },
      query: {
        value: e.value
      }
    });
  }
  /**
   * Get the Board the Checklist is on
   * @param data The data for the request.
   * @param data.id ID of a checklist.
   * @param data.fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
   * @returns unknown Success
   * @throws ApiError
   */
  static getChecklistsIdBoard(e) {
    return r(t, {
      method: "GET",
      url: "/checklists/{id}/board",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get the Card a Checklist is on
   * @param data The data for the request.
   * @param data.id ID of a checklist.
   * @returns unknown Success
   * @throws ApiError
   */
  static getChecklistsIdCards(e) {
    return r(t, {
      method: "GET",
      url: "/checklists/{id}/cards",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Get Checkitems on a Checklist
   * @param data The data for the request.
   * @param data.id ID of a checklist.
   * @param data.filter One of: `all`, `none`.
   * @param data.fields One of: `all`, `name`, `nameData`, `pos`, `state`,`type`, `due`, `dueReminder`, `idMember`.
   * @returns unknown Success
   * @throws ApiError
   */
  static getChecklistsIdCheckitems(e) {
    return r(t, {
      method: "GET",
      url: "/checklists/{id}/checkItems",
      path: {
        id: e.id
      },
      query: {
        filter: e.filter,
        fields: e.fields
      }
    });
  }
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
  static postChecklistsIdCheckitems(e) {
    return r(t, {
      method: "POST",
      url: "/checklists/{id}/checkItems",
      path: {
        id: e.id
      },
      query: {
        name: e.name,
        pos: e.pos,
        checked: e.checked,
        due: e.due,
        dueReminder: e.dueReminder,
        idMember: e.idMember
      }
    });
  }
  /**
   * Get a Checkitem on a Checklist
   * @param data The data for the request.
   * @param data.id ID of a checklist.
   * @param data.idCheckItem ID of the check item to retrieve.
   * @param data.fields One of: `all`, `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`,.
   * @returns unknown Success
   * @throws ApiError
   */
  static getChecklistsIdCheckitemsIdcheckitem(e) {
    return r(t, {
      method: "GET",
      url: "/checklists/{id}/checkItems/{idCheckItem}",
      path: {
        id: e.id,
        idCheckItem: e.idCheckItem
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Delete Checkitem from Checklist
   * Remove an item from a checklist
   * @param data The data for the request.
   * @param data.id ID of a checklist.
   * @param data.idCheckItem ID of the check item to retrieve.
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteChecklistsIdCheckitemsIdcheckitem(e) {
    return r(t, {
      method: "DELETE",
      url: "/checklists/{id}/checkItems/{idCheckItem}",
      path: {
        id: e.id,
        idCheckItem: e.idCheckItem
      }
    });
  }
  /**
   * Create a new Custom Field on a Board
   * Create a new Custom Field on a board.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns CustomField Success
   * @throws ApiError
   */
  static postCustomfields(e = {}) {
    return r(t, {
      method: "POST",
      url: "/customFields",
      body: e.requestBody,
      mediaType: "application/json"
    });
  }
  /**
   * Get a Custom Field
   * @param data The data for the request.
   * @param data.id ID of the Custom Field.
   * @returns CustomField Success
   * @throws ApiError
   */
  static getCustomfieldsId(e) {
    return r(t, {
      method: "GET",
      url: "/customFields/{id}",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Update a Custom Field definition
   * Update a Custom Field definition.
   * @param data The data for the request.
   * @param data.id ID of the Custom Field.
   * @param data.requestBody
   * @returns CustomField Success
   * @throws ApiError
   */
  static putCustomfieldsId(e) {
    return r(t, {
      method: "PUT",
      url: "/customFields/{id}",
      path: {
        id: e.id
      },
      body: e.requestBody,
      mediaType: "application/json"
    });
  }
  /**
   * Delete a Custom Field definition
   * Delete a Custom Field from a board.
   * @param data The data for the request.
   * @param data.id ID of the Custom Field.
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteCustomfieldsId(e) {
    return r(t, {
      method: "DELETE",
      url: "/customFields/{id}",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Add Option to Custom Field dropdown
   * Add an option to a dropdown Custom Field
   * @param data The data for the request.
   * @param data.id ID of the customfield.
   * @returns unknown Success
   * @throws ApiError
   */
  static getCustomfieldsIdOptions(e) {
    return r(t, {
      method: "POST",
      url: "/customFields/{id}/options",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Get Options of Custom Field drop down
   * Get the options of a drop down Custom Field
   * @param data The data for the request.
   * @param data.id ID of the customfield.
   * @returns unknown Success
   * @throws ApiError
   */
  static postCustomfieldsIdOptions(e) {
    return r(t, {
      method: "GET",
      url: "/customFields/{id}/options",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Get Option of Custom Field dropdown
   * Retrieve a specific, existing Option on a given dropdown-type Custom Field
   * @param data The data for the request.
   * @param data.id ID of the customfielditem.
   * @param data.idCustomFieldOption ID of the customfieldoption to retrieve.
   * @returns unknown Success
   * @throws ApiError
   */
  static getCustomfieldsOptionsIdcustomfieldoption(e) {
    return r(t, {
      method: "GET",
      url: "/customFields/{id}/options/{idCustomFieldOption}",
      path: {
        id: e.id,
        idCustomFieldOption: e.idCustomFieldOption
      }
    });
  }
  /**
   * Delete Option of Custom Field dropdown
   * Delete an option from a Custom Field dropdown.
   * @param data The data for the request.
   * @param data.id ID of the customfielditem.
   * @param data.idCustomFieldOption ID of the customfieldoption to retrieve.
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteCustomfieldsOptionsIdcustomfieldoption(e) {
    return r(t, {
      method: "DELETE",
      url: "/customFields/{id}/options/{idCustomFieldOption}",
      path: {
        id: e.id,
        idCustomFieldOption: e.idCustomFieldOption
      }
    });
  }
  /**
   * List available Emoji
   * List available Emoji
   * @param data The data for the request.
   * @param data.locale The locale to return emoji descriptions and names in. Defaults to the logged in member's locale.
   * @param data.spritesheets `true` to return spritesheet URLs in the response
   * @returns Emoji Success
   * @throws ApiError
   */
  static emoji(e = {}) {
    return r(t, {
      method: "GET",
      url: "/emoji",
      query: {
        locale: e.locale,
        spritesheets: e.spritesheets
      }
    });
  }
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
  static getEnterprisesId(e) {
    return r(t, {
      method: "GET",
      url: "/enterprises/{id}",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields,
        members: e.members,
        member_fields: e.memberFields,
        member_filter: e.memberFilter,
        member_sort: e.memberSort,
        member_sortBy: e.memberSortBy,
        member_sortOrder: e.memberSortOrder,
        member_startIndex: e.memberStartIndex,
        member_count: e.memberCount,
        organizations: e.organizations,
        organization_fields: e.organizationFields,
        organization_paid_accounts: e.organizationPaidAccounts,
        organization_memberships: e.organizationMemberships
      }
    });
  }
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
  static getEnterprisesIdAuditlog(e) {
    return r(t, {
      method: "GET",
      url: "/enterprises/{id}/auditlog",
      path: {
        id: e.id
      }
    });
  }
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
  static getEnterprisesIdAdmins(e) {
    return r(t, {
      method: "GET",
      url: "/enterprises/{id}/admins",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      },
      errors: {
        401: "Unauthorized",
        404: "The specified resource was not found"
      }
    });
  }
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
  static getEnterprisesIdSignupurl(e) {
    return r(t, {
      method: "GET",
      url: "/enterprises/{id}/signupUrl",
      path: {
        id: e.id
      },
      query: {
        authenticate: e.authenticate,
        confirmationAccepted: e.confirmationAccepted,
        returnUrl: e.returnUrl,
        tosAccepted: e.tosAccepted
      }
    });
  }
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
  static getUsersId(e) {
    return r(t, {
      method: "GET",
      url: "/enterprises/{id}/members/query",
      path: {
        id: e.id
      },
      query: {
        licensed: e.licensed,
        deactivated: e.deactivated,
        collaborator: e.collaborator,
        managed: e.managed,
        admin: e.admin,
        activeSince: e.activeSince,
        inactiveSince: e.inactiveSince,
        search: e.search,
        startIndex: e.startIndex
      }
    });
  }
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
  static getEnterprisesIdMembers(e) {
    return r(t, {
      method: "GET",
      url: "/enterprises/{id}/members",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields,
        filter: e.filter,
        sort: e.sort,
        sortBy: e.sortBy,
        sortOrder: e.sortOrder,
        startIndex: e.startIndex,
        count: e.count,
        organization_fields: e.organizationFields,
        board_fields: e.boardFields
      }
    });
  }
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
  static getEnterprisesIdMembersIdmember(e) {
    return r(t, {
      method: "GET",
      url: "/enterprises/{id}/members/{idMember}",
      path: {
        id: e.id,
        idMember: e.idMember
      },
      query: {
        fields: e.fields,
        organization_fields: e.organizationFields,
        board_fields: e.boardFields
      },
      errors: {
        401: "Unauthorized",
        404: "The specified resource was not found"
      }
    });
  }
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
  static getEnterprisesIdTransferrableOrganizationIdOrganization(e) {
    return r(t, {
      method: "GET",
      url: "/enterprises/{id}/transferrable/organization/{idOrganization}",
      path: {
        id: e.id,
        idOrganization: e.idOrganization
      },
      errors: {
        401: "Unauthorized",
        404: "The specified resource was not found"
      }
    });
  }
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
  static getEnterprisesIdTransferrableBulkIdOrganizations(e) {
    return r(t, {
      method: "GET",
      url: "/enterprises/{id}/transferrable/bulk/{idOrganizations}",
      path: {
        id: e.id,
        idOrganizations: e.idOrganizations
      },
      errors: {
        401: "Unauthorized",
        404: "The specified resource was not found"
      }
    });
  }
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
  static putEnterprisesIdEnterpriseJoinRequestBulk(e) {
    return r(t, {
      method: "PUT",
      url: "/enterprises/${id}/enterpriseJoinRequest/bulk",
      path: {
        id: e.id
      },
      query: {
        idOrganizations: e.idOrganizations
      },
      errors: {
        401: "Unauthorized",
        404: "The specified resource was not found"
      }
    });
  }
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
  static getEnterprisesIdClaimableOrganizations(e) {
    return r(t, {
      method: "GET",
      url: "/enterprises/{id}/claimableOrganizations",
      path: {
        id: e.id
      },
      query: {
        limit: e.limit,
        cursor: e.cursor,
        name: e.name,
        activeSince: e.activeSince,
        inactiveSince: e.inactiveSince
      },
      errors: {
        401: "Unauthorized",
        404: "The specified resource was not found"
      }
    });
  }
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
  static getEnterprisesIdPendingOrganizations(e) {
    return r(t, {
      method: "GET",
      url: "/enterprises/{id}/pendingOrganizations",
      path: {
        id: e.id
      },
      query: {
        activeSince: e.activeSince,
        inactiveSince: e.inactiveSince
      },
      errors: {
        401: "Unauthorized",
        404: "The specified resource was not found"
      }
    });
  }
  /**
   * Create an auth Token for an Enterprise.
   * Create an auth Token for an Enterprise.
   * @param data The data for the request.
   * @param data.id ID of the enterprise to retrieve.
   * @param data.expiration One of: `1hour`, `1day`, `30days`, `never`
   * @returns unknown Success
   * @throws ApiError
   */
  static postEnterprisesIdTokens(e) {
    return r(t, {
      method: "POST",
      url: "/enterprises/{id}/tokens",
      path: {
        id: e.id
      },
      query: {
        expiration: e.expiration
      }
    });
  }
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
  static putEnterprisesIdOrganizations(e) {
    return r(t, {
      method: "PUT",
      url: "/enterprises/{id}/organizations",
      path: {
        id: e.id
      },
      query: {
        idOrganization: e.idOrganization
      },
      errors: {
        401: "Unauthorized",
        404: "The specified resource was not found"
      }
    });
  }
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
  static putEnterprisesIdMembersIdmemberLicensed(e) {
    return r(t, {
      method: "PUT",
      url: "/enterprises/{id}/members/{idMember}/licensed",
      path: {
        id: e.id,
        idMember: e.idMember
      },
      query: {
        value: e.value
      },
      errors: {
        401: "Unauthorized",
        404: "The specified resource was not found"
      }
    });
  }
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
  static enterprisesIdMembersIdMemberDeactivated(e) {
    return r(t, {
      method: "PUT",
      url: "/enterprises/{id}/members/{idMember}/deactivated",
      path: {
        id: e.id,
        idMember: e.idMember
      },
      query: {
        value: e.value,
        fields: e.fields,
        organization_fields: e.organizationFields,
        board_fields: e.boardFields
      }
    });
  }
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
  static putEnterprisesIdAdminsIdmember(e) {
    return r(t, {
      method: "PUT",
      url: "/enterprises/{id}/admins/{idMember}",
      path: {
        id: e.id,
        idMember: e.idMember
      }
    });
  }
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
  static enterprisesIdOrganizationsIdmember(e) {
    return r(t, {
      method: "DELETE",
      url: "/enterprises/{id}/admins/{idMember}",
      path: {
        id: e.id,
        idMember: e.idMember
      }
    });
  }
  /**
   * Delete an Organization from an Enterprise.
   * Remove an organization from an enterprise.
   * @param data The data for the request.
   * @param data.id ID of the enterprise to retrieve.
   * @param data.idOrg ID of the organization to be removed from the enterprise.
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteEnterprisesIdOrganizationsIdorg(e) {
    return r(t, {
      method: "DELETE",
      url: "/enterprises/{id}/organizations/{idOrg}",
      path: {
        id: e.id,
        idOrg: e.idOrg
      }
    });
  }
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
  static getEnterprisesIdOrganizationsBulkIdOrganizations(e) {
    return r(t, {
      method: "GET",
      url: "/enterprises/{id}/organizations/bulk/{idOrganizations}",
      path: {
        id: e.id,
        idOrganizations: e.idOrganizations
      },
      errors: {
        401: "Unauthorized",
        404: "The specified resource was not found"
      }
    });
  }
  /**
   * Get a Label
   * Get information about a single Label.
   * @param data The data for the request.
   * @param data.id The ID of the Label
   * @param data.fields all or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/)
   * @returns unknown Success
   * @throws ApiError
   */
  static getLabelsId(e) {
    return r(t, {
      method: "GET",
      url: "/labels/{id}",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
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
  static putLabelsId(e) {
    return r(t, {
      method: "PUT",
      url: "/labels/{id}",
      path: {
        id: e.id
      },
      query: {
        name: e.name,
        color: e.color
      }
    });
  }
  /**
   * Delete a Label
   * Delete a label by ID.
   * @param data The data for the request.
   * @param data.id The ID of the Label
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteLabelsId(e) {
    return r(t, {
      method: "DELETE",
      url: "/labels/{id}",
      path: {
        id: e.id
      }
    });
  }
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
  static putLabelsIdField(e) {
    return r(t, {
      method: "PUT",
      url: "/labels/{id}/{field}",
      path: {
        id: e.id,
        field: e.field
      },
      query: {
        value: e.value
      }
    });
  }
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
  static postLabels(e) {
    return r(t, {
      method: "POST",
      url: "/labels",
      query: {
        name: e.name,
        color: e.color,
        idBoard: e.idBoard
      }
    });
  }
  /**
   * Get a List
   * Get information about a List
   * @param data The data for the request.
   * @param data.id The ID of the list
   * @param data.fields `all` or a comma separated list of List field names.
   * @returns unknown Success
   * @throws ApiError
   */
  static getListsId(e) {
    return r(t, {
      method: "GET",
      url: "/lists/{id}",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
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
  static putListsId(e) {
    return r(t, {
      method: "PUT",
      url: "/lists/{id}",
      path: {
        id: e.id
      },
      query: {
        name: e.name,
        closed: e.closed,
        idBoard: e.idBoard,
        pos: e.pos,
        subscribed: e.subscribed
      }
    });
  }
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
  static postLists(e) {
    return r(t, {
      method: "POST",
      url: "/lists",
      query: {
        name: e.name,
        idBoard: e.idBoard,
        idListSource: e.idListSource,
        pos: e.pos
      }
    });
  }
  /**
   * Archive all Cards in List
   * Archive all cards in a list
   * @param data The data for the request.
   * @param data.id The ID of the list
   * @returns unknown Success
   * @throws ApiError
   */
  static postListsIdArchiveallcards(e) {
    return r(t, {
      method: "POST",
      url: "/lists/{id}/archiveAllCards",
      path: {
        id: e.id
      }
    });
  }
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
  static postListsIdMoveallcards(e) {
    return r(t, {
      method: "POST",
      url: "/lists/{id}/moveAllCards",
      path: {
        id: e.id
      },
      query: {
        idBoard: e.idBoard,
        idList: e.idList
      }
    });
  }
  /**
   * Archive or unarchive a list
   * Archive or unarchive a list
   * @param data The data for the request.
   * @param data.id The ID of the list
   * @param data.value Set to true to close (archive) the list
   * @returns unknown Success
   * @throws ApiError
   */
  static putListsIdClosed(e) {
    return r(t, {
      method: "PUT",
      url: "/lists/{id}/closed",
      path: {
        id: e.id
      },
      query: {
        value: e.value
      }
    });
  }
  /**
   * Move List to Board
   * Move a List to a different Board
   * @param data The data for the request.
   * @param data.id The ID of the list
   * @param data.value The ID of the board to move the list to
   * @returns unknown Success
   * @throws ApiError
   */
  static putIdIdboard(e) {
    return r(t, {
      method: "PUT",
      url: "/lists/{id}/idBoard",
      path: {
        id: e.id
      },
      query: {
        value: e.value
      }
    });
  }
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
  static putListsIdField(e) {
    return r(t, {
      method: "PUT",
      url: "/lists/{id}/{field}",
      path: {
        id: e.id,
        field: e.field
      },
      query: {
        value: e.value
      }
    });
  }
  /**
   * Get Actions for a List
   * Get the Actions on a List
   * @param data The data for the request.
   * @param data.id The ID of the list
   * @param data.filter A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
   * @returns unknown Success
   * @throws ApiError
   */
  static getListsIdActions(e) {
    return r(t, {
      method: "GET",
      url: "/lists/{id}/actions",
      path: {
        id: e.id
      },
      query: {
        filter: e.filter
      }
    });
  }
  /**
   * Get the Board a List is on
   * Get the board a list is on
   * @param data The data for the request.
   * @param data.id The ID of the list
   * @param data.fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object)
   * @returns unknown Success
   * @throws ApiError
   */
  static getListsIdBoard(e) {
    return r(t, {
      method: "GET",
      url: "/lists/{id}/board",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get Cards in a List
   * List the cards in a list
   * @param data The data for the request.
   * @param data.id The ID of the list
   * @returns Card Success
   * @throws ApiError
   */
  static getListsIdCards(e) {
    return r(t, {
      method: "GET",
      url: "/lists/{id}/cards",
      path: {
        id: e.id
      }
    });
  }
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
  static getMembersId(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}",
      path: {
        id: e.id
      },
      query: {
        actions: e.actions,
        boards: e.boards,
        boardBackgrounds: e.boardBackgrounds,
        boardsInvited: e.boardsInvited,
        boardsInvited_fields: e.boardsInvitedFields,
        boardStars: e.boardStars,
        cards: e.cards,
        customBoardBackgrounds: e.customBoardBackgrounds,
        customEmoji: e.customEmoji,
        customStickers: e.customStickers,
        fields: e.fields,
        notifications: e.notifications,
        organizations: e.organizations,
        organization_fields: e.organizationFields,
        organization_paid_account: e.organizationPaidAccount,
        organizationsInvited: e.organizationsInvited,
        organizationsInvited_fields: e.organizationsInvitedFields,
        paid_account: e.paidAccount,
        savedSearches: e.savedSearches,
        tokens: e.tokens
      }
    });
  }
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
  static putMembersId(e) {
    return r(t, {
      method: "PUT",
      url: "/members/{id}",
      path: {
        id: e.id
      },
      query: {
        fullName: e.fullName,
        initials: e.initials,
        username: e.username,
        bio: e.bio,
        avatarSource: e.avatarSource,
        "prefs/colorBlind": e.prefsColorBlind,
        "prefs/locale": e.prefsLocale,
        "prefs/minutesBetweenSummaries": e.prefsMinutesBetweenSummaries
      }
    });
  }
  /**
   * Get a field on a Member
   * Get a particular property of a member
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.field One of the member [fields](/cloud/trello/guides/rest-api/object-definitions/)
   * @returns unknown Success
   * @throws ApiError
   */
  static getMembersIdField(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/{field}",
      path: {
        id: e.id,
        field: e.field
      }
    });
  }
  /**
   * Get a Member's Actions
   * List the actions for a member
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.filter A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
   * @returns unknown Success
   * @throws ApiError
   */
  static getMembersIdActions(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/actions",
      path: {
        id: e.id
      },
      query: {
        filter: e.filter
      }
    });
  }
  /**
   * Get Member's custom Board backgrounds
   * Get a member's custom board backgrounds
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.filter One of: `all`, `custom`, `default`, `none`, `premium`
   * @returns unknown Success
   * @throws ApiError
   */
  static getMembersIdBoardbackgrounds(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/boardBackgrounds",
      path: {
        id: e.id
      },
      query: {
        filter: e.filter
      }
    });
  }
  /**
   * Upload new boardBackground for Member
   * Upload a new boardBackground
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.file
   * @returns unknown Success
   * @throws ApiError
   */
  static postMembersIdBoardbackgrounds1(e) {
    return r(t, {
      method: "POST",
      url: "/members/{id}/boardBackgrounds",
      path: {
        id: e.id
      },
      query: {
        file: e.file
      }
    });
  }
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
  static getMembersIdBoardbackgroundsIdbackground(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/boardBackgrounds/{idBackground}",
      path: {
        id: e.id,
        idBackground: e.idBackground
      },
      query: {
        fields: e.fields
      }
    });
  }
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
  static putMembersIdBoardbackgroundsIdbackground(e) {
    return r(t, {
      method: "PUT",
      url: "/members/{id}/boardBackgrounds/{idBackground}",
      path: {
        id: e.id,
        idBackground: e.idBackground
      },
      query: {
        brightness: e.brightness,
        tile: e.tile
      }
    });
  }
  /**
   * Delete a Member's custom Board background
   * Delete a board background
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.idBackground The ID of the board background
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteMembersIdBoardbackgroundsIdbackground(e) {
    return r(t, {
      method: "DELETE",
      url: "/members/{id}/boardBackgrounds/{idBackground}",
      path: {
        id: e.id,
        idBackground: e.idBackground
      }
    });
  }
  /**
   * Get a Member's boardStars
   * List a member's board stars
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @returns unknown Success
   * @throws ApiError
   */
  static getMembersIdBoardstars(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/boardStars",
      path: {
        id: e.id
      }
    });
  }
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
  static postMembersIdBoardstars(e) {
    return r(t, {
      method: "POST",
      url: "/members/{id}/boardStars",
      path: {
        id: e.id
      },
      query: {
        idBoard: e.idBoard,
        pos: e.pos
      }
    });
  }
  /**
   * Get a boardStar of Member
   * Get a specific boardStar
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.idStar The ID of the board star
   * @returns BoardStars Success
   * @throws ApiError
   */
  static getMembersIdBoardstarsIdstar(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/boardStars/{idStar}",
      path: {
        id: e.id,
        idStar: e.idStar
      }
    });
  }
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
  static putMembersIdBoardstarsIdstar(e) {
    return r(t, {
      method: "PUT",
      url: "/members/{id}/boardStars/{idStar}",
      path: {
        id: e.id,
        idStar: e.idStar
      },
      query: {
        pos: e.pos
      }
    });
  }
  /**
   * Delete Star for Board
   * Unstar a board
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.idStar The ID of the board star
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteMembersIdBoardstarsIdstar(e) {
    return r(t, {
      method: "DELETE",
      url: "/members/{id}/boardStars/{idStar}",
      path: {
        id: e.id,
        idStar: e.idStar
      }
    });
  }
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
  static getMembersIdBoards(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/boards",
      path: {
        id: e.id
      },
      query: {
        filter: e.filter,
        fields: e.fields,
        lists: e.lists,
        organization: e.organization,
        organization_fields: e.organizationFields
      }
    });
  }
  /**
   * Get Boards the Member has been invited to
   * Get the boards the member has been invited to
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
   * @returns Board Success
   * @throws ApiError
   */
  static getMembersIdBoardsinvited(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/boardsInvited",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get Cards the Member is on
   * Gets the cards a member is on
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.filter One of: `all`, `closed`, `none`, `open`, `visible`
   * @returns Card Success
   * @throws ApiError
   */
  static getMembersIdCards(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/cards",
      path: {
        id: e.id
      },
      query: {
        filter: e.filter
      }
    });
  }
  /**
   * Get a Member's custom Board Backgrounds
   * Get a member's custom board backgrounds
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @returns BoardBackground Success
   * @throws ApiError
   */
  static getMembersIdCustomboardbackgrounds(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/customBoardBackgrounds",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Create a new custom Board Background
   * Upload a new custom board background
   * @param data The data for the request.
   * @param data.file
   * @param data.id The ID or username of the member
   * @returns BoardBackground Success
   * @throws ApiError
   */
  static membersidcustomboardbackgrounds1(e) {
    return r(t, {
      method: "POST",
      url: "/members/{id}/customBoardBackgrounds",
      path: {
        id: e.id
      },
      query: {
        file: e.file
      }
    });
  }
  /**
   * Get custom Board Background of Member
   * Get a specific custom board background
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.idBackground The ID of the custom background
   * @returns BoardBackground Success
   * @throws ApiError
   */
  static getMembersIdCustomboardbackgroundsIdbackground(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/customBoardBackgrounds/{idBackground}",
      path: {
        id: e.id,
        idBackground: e.idBackground
      }
    });
  }
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
  static putMembersIdCustomboardbackgroundsIdbackground(e) {
    return r(t, {
      method: "PUT",
      url: "/members/{id}/customBoardBackgrounds/{idBackground}",
      path: {
        id: e.id,
        idBackground: e.idBackground
      },
      query: {
        brightness: e.brightness,
        tile: e.tile
      }
    });
  }
  /**
   * Delete custom Board Background of Member
   * Delete a specific custom board background
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.idBackground The ID of the custom background
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteMembersIdCustomboardbackgroundsIdbackground(e) {
    return r(t, {
      method: "DELETE",
      url: "/members/{id}/customBoardBackgrounds/{idBackground}",
      path: {
        id: e.id,
        idBackground: e.idBackground
      }
    });
  }
  /**
   * Get a Member's customEmojis
   * Get a Member's uploaded custom Emojis
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @returns CustomEmoji Success
   * @throws ApiError
   */
  static getMembersIdCustomemoji(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/customEmoji",
      path: {
        id: e.id
      }
    });
  }
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
  static postMembersIdCustomemoji(e) {
    return r(t, {
      method: "POST",
      url: "/members/{id}/customEmoji",
      path: {
        id: e.id
      },
      query: {
        file: e.file,
        name: e.name
      }
    });
  }
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
  static membersidcustomemojiidemoji(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/customEmoji/{idEmoji}",
      path: {
        id: e.id,
        idEmoji: e.idEmoji
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get Member's custom Stickers
   * Get a Member's uploaded stickers
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @returns CustomSticker Success
   * @throws ApiError
   */
  static getMembersIdCustomstickers(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/customStickers",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Create custom Sticker for Member
   * Upload a new custom sticker
   * @param data The data for the request.
   * @param data.file
   * @param data.id The ID or username of the member
   * @returns CustomSticker Success
   * @throws ApiError
   */
  static postMembersIdCustomstickers(e) {
    return r(t, {
      method: "POST",
      url: "/members/{id}/customStickers",
      path: {
        id: e.id
      },
      query: {
        file: e.file
      }
    });
  }
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
  static getMembersIdCustomstickersIdsticker(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/customStickers/{idSticker}",
      path: {
        id: e.id,
        idSticker: e.idSticker
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Delete a Member's custom Sticker
   * Delete a Member's custom Sticker
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.idSticker The ID of the uploaded sticker
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteMembersIdCustomstickersIdsticker(e) {
    return r(t, {
      method: "DELETE",
      url: "/members/{id}/customStickers/{idSticker}",
      path: {
        id: e.id,
        idSticker: e.idSticker
      }
    });
  }
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
  static getMembersIdNotifications(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/notifications",
      path: {
        id: e.id
      },
      query: {
        entities: e.entities,
        display: e.display,
        filter: e.filter,
        read_filter: e.readFilter,
        fields: e.fields,
        limit: e.limit,
        page: e.page,
        before: e.before,
        since: e.since,
        memberCreator: e.memberCreator,
        memberCreator_fields: e.memberCreatorFields
      }
    });
  }
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
  static getMembersIdOrganizations(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/organizations",
      path: {
        id: e.id
      },
      query: {
        filter: e.filter,
        fields: e.fields,
        paid_account: e.paidAccount
      }
    });
  }
  /**
   * Get Organizations a Member has been invited to
   * Get a member's Workspaces they have been invited to
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.fields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
   * @returns Organization Success
   * @throws ApiError
   */
  static getMembersIdOrganizationsinvited(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/organizationsInvited",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get Member's saved searched
   * List the saved searches of a Member
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @returns SavedSearch Success
   * @throws ApiError
   */
  static getMembersIdSavedsearches(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/savedSearches",
      path: {
        id: e.id
      }
    });
  }
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
  static postMembersIdSavedsearches(e) {
    return r(t, {
      method: "POST",
      url: "/members/{id}/savedSearches",
      path: {
        id: e.id
      },
      query: {
        name: e.name,
        query: e.query,
        pos: e.pos
      }
    });
  }
  /**
   * Get a saved search
   * Get a saved search
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.idSearch The ID of the saved search to delete
   * @returns SavedSearch Success
   * @throws ApiError
   */
  static getMembersIdSavedsearchesIdsearch(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/savedSearches/{idSearch}",
      path: {
        id: e.id,
        idSearch: e.idSearch
      }
    });
  }
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
  static putMembersIdSavedsearchesIdsearch(e) {
    return r(t, {
      method: "PUT",
      url: "/members/{id}/savedSearches/{idSearch}",
      path: {
        id: e.id,
        idSearch: e.idSearch
      },
      query: {
        name: e.name,
        query: e.query,
        pos: e.pos
      }
    });
  }
  /**
   * Delete a saved search
   * Delete a saved search
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.idSearch The ID of the saved search to delete
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteMembersIdSavedsearchesIdsearch(e) {
    return r(t, {
      method: "DELETE",
      url: "/members/{id}/savedSearches/{idSearch}",
      path: {
        id: e.id,
        idSearch: e.idSearch
      }
    });
  }
  /**
   * Get Member's Tokens
   * List a members app tokens
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.webhooks Whether to include webhooks
   * @returns Token Success
   * @throws ApiError
   */
  static getMembersIdTokens(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/tokens",
      path: {
        id: e.id
      },
      query: {
        webhooks: e.webhooks
      }
    });
  }
  /**
   * Create Avatar for Member
   * Create a new avatar for a member
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.file
   * @returns unknown Success
   * @throws ApiError
   */
  static membersidavatar(e) {
    return r(t, {
      method: "POST",
      url: "/members/{id}/avatar",
      path: {
        id: e.id
      },
      query: {
        file: e.file
      }
    });
  }
  /**
   * Dismiss a message for Member
   * Dismiss a message
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.value The message to dismiss
   * @returns unknown Success
   * @throws ApiError
   */
  static postMembersIdOnetimemessagesdismissed(e) {
    return r(t, {
      method: "POST",
      url: "/members/{id}/oneTimeMessagesDismissed",
      path: {
        id: e.id
      },
      query: {
        value: e.value
      }
    });
  }
  /**
   * Get a Member's notification channel settings
   * Get a member's notification channel settings
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @returns NotificationChannelSettings Success
   * @throws ApiError
   */
  static getMembersIdNotificationChannelSettings(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/notificationsChannelSettings",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Update blocked notification keys of Member on a channel
   * Update blocked notification keys of Member on a specific channel
   * @param data The data for the request.
   * @param data.requestBody
   * @param data.id The ID or username of the member
   * @returns NotificationChannelSettings Success
   * @throws ApiError
   */
  static putMembersIdNotificationChannelSettingsChannelBlockedKeys(e) {
    return r(t, {
      method: "PUT",
      url: "/members/{id}/notificationsChannelSettings",
      path: {
        id: e.id
      },
      body: e.requestBody,
      mediaType: "application/json"
    });
  }
  /**
   * Get blocked notification keys of Member on this channel
   * Get blocked notification keys of Member on a specific channel
   * @param data The data for the request.
   * @param data.id The ID or username of the member
   * @param data.channel Channel to block notifications on
   * @returns NotificationChannelSettings Success
   * @throws ApiError
   */
  static getMembersIdNotificationChannelSettingsChannel(e) {
    return r(t, {
      method: "GET",
      url: "/members/{id}/notificationsChannelSettings/{channel}",
      path: {
        id: e.id,
        channel: e.channel
      }
    });
  }
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
  static putMembersIdNotificationChannelSettingsChannelBlockedKeys1(e) {
    return r(t, {
      method: "PUT",
      url: "/members/{id}/notificationsChannelSettings/{channel}",
      path: {
        id: e.id,
        channel: e.channel
      },
      body: e.requestBody,
      mediaType: "application/json"
    });
  }
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
  static putMembersIdNotificationChannelSettingsChannelBlockedKeys2(e) {
    return r(t, {
      method: "PUT",
      url: "/members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}",
      path: {
        id: e.id,
        channel: e.channel,
        blockedKeys: e.blockedKeys
      }
    });
  }
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
  static getNotificationsId(e) {
    return r(t, {
      method: "GET",
      url: "/notifications/{id}",
      path: {
        id: e.id
      },
      query: {
        board: e.board,
        board_fields: e.boardFields,
        card: e.card,
        card_fields: e.cardFields,
        display: e.display,
        entities: e.entities,
        fields: e.fields,
        list: e.list,
        member: e.member,
        member_fields: e.memberFields,
        memberCreator: e.memberCreator,
        memberCreator_fields: e.memberCreatorFields,
        organization: e.organization,
        organization_fields: e.organizationFields
      }
    });
  }
  /**
   * Update a Notification's read status
   * Update the read status of a notification
   * @param data The data for the request.
   * @param data.id The ID of the notification
   * @param data.unread Whether the notification should be marked as read or not
   * @returns unknown Success
   * @throws ApiError
   */
  static putNotificationsId(e) {
    return r(t, {
      method: "PUT",
      url: "/notifications/{id}",
      path: {
        id: e.id
      },
      query: {
        unread: e.unread
      }
    });
  }
  /**
   * Get a field of a Notification
   * Get a specific property of a notification
   * @param data The data for the request.
   * @param data.id The ID of the notification
   * @param data.field A notification [field](/cloud/trello/guides/rest-api/object-definitions/)
   * @returns unknown Success
   * @throws ApiError
   */
  static getNotificationsIdField(e) {
    return r(t, {
      method: "GET",
      url: "/notifications/{id}/{field}",
      path: {
        id: e.id,
        field: e.field
      }
    });
  }
  /**
   * Mark all Notifications as read
   * Mark all notifications as read
   * @param data The data for the request.
   * @param data.read Boolean to specify whether to mark as read or unread (defaults to `true`, marking as read)
   * @param data.ids A comma-seperated list of IDs. Allows specifying an array of notification IDs to change the read state for. This will become useful as we add grouping of notifications to the UI, with a single button to mark all notifications in the group as read/unread.
   * @returns unknown Success
   * @throws ApiError
   */
  static postNotificationsAllRead(e = {}) {
    return r(t, {
      method: "POST",
      url: "/notifications/all/read",
      query: {
        read: e.read,
        ids: e.ids
      }
    });
  }
  /**
   * Update Notification's read status
   * Update Notification's read status
   * @param data The data for the request.
   * @param data.id The ID of the notification
   * @param data.value
   * @returns unknown Success
   * @throws ApiError
   */
  static putNotificationsIdUnread(e) {
    return r(t, {
      method: "PUT",
      url: "/notifications/{id}/unread",
      path: {
        id: e.id
      },
      query: {
        value: e.value
      }
    });
  }
  /**
   * Get the Board a Notification is on
   * Get the board a notification is associated with
   * @param data The data for the request.
   * @param data.id The ID of the notification
   * @param data.fields `all` or a comma-separated list of board[fields](/cloud/trello/guides/rest-api/object-definitions/)
   * @returns unknown Success
   * @throws ApiError
   */
  static getNotificationsIdBoard(e) {
    return r(t, {
      method: "GET",
      url: "/notifications/{id}/board",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get the Card a Notification is on
   * Get the card a notification is associated with
   * @param data The data for the request.
   * @param data.id The ID of the notification
   * @param data.fields `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
   * @returns unknown Success
   * @throws ApiError
   */
  static getNotificationsIdCard(e) {
    return r(t, {
      method: "GET",
      url: "/notifications/{id}/card",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get the List a Notification is on
   * Get the list a notification is associated with
   * @param data The data for the request.
   * @param data.id The ID of the notification
   * @param data.fields `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
   * @returns unknown Success
   * @throws ApiError
   */
  static getNotificationsIdList(e) {
    return r(t, {
      method: "GET",
      url: "/notifications/{id}/list",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get the Member a Notification is about (not the creator)
   * Get the member (not the creator) a notification is about
   * @param data The data for the request.
   * @param data.id The ID of the notification
   * @param data.fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
   * @returns unknown Success
   * @throws ApiError
   */
  static notificationsidmember(e) {
    return r(t, {
      method: "GET",
      url: "/notifications/{id}/member",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get the Member who created the Notification
   * Get the member who created the notification
   * @param data The data for the request.
   * @param data.id The ID of the notification
   * @param data.fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
   * @returns unknown Success
   * @throws ApiError
   */
  static getNotificationsIdMembercreator(e) {
    return r(t, {
      method: "GET",
      url: "/notifications/{id}/memberCreator",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get a Notification's associated Organization
   * Get the organization a notification is associated with
   * @param data The data for the request.
   * @param data.id The ID of the notification
   * @param data.fields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
   * @returns unknown Success
   * @throws ApiError
   */
  static getNotificationsIdOrganization(e) {
    return r(t, {
      method: "GET",
      url: "/notifications/{id}/organization",
      path: {
        id: e.id
      },
      query: {
        fields: e.fields
      }
    });
  }
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
  static postOrganizations(e) {
    return r(t, {
      method: "POST",
      url: "/organizations",
      query: {
        displayName: e.displayName,
        desc: e.desc,
        name: e.name,
        website: e.website
      }
    });
  }
  /**
   * Get an Organization
   * @param data The data for the request.
   * @param data.id The ID or name of the Organization
   * @returns Organization Success
   * @throws ApiError
   */
  static getOrganizationsId(e) {
    return r(t, {
      method: "GET",
      url: "/organizations/{id}",
      path: {
        id: e.id
      }
    });
  }
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
  static putOrganizationsId(e) {
    return r(t, {
      method: "PUT",
      url: "/organizations/{id}",
      path: {
        id: e.id
      },
      query: {
        name: e.name,
        displayName: e.displayName,
        desc: e.desc,
        website: e.website,
        "prefs/associatedDomain": e.prefsAssociatedDomain,
        "prefs/externalMembersDisabled": e.prefsExternalMembersDisabled,
        "prefs/googleAppsVersion": e.prefsGoogleAppsVersion,
        "prefs/boardVisibilityRestrict/org": e.prefsBoardVisibilityRestrictOrg,
        "prefs/boardVisibilityRestrict/private": e.prefsBoardVisibilityRestrictPrivate,
        "prefs/boardVisibilityRestrict/public": e.prefsBoardVisibilityRestrictPublic,
        "prefs/orgInviteRestrict": e.prefsOrgInviteRestrict,
        "prefs/permissionLevel": e.prefsPermissionLevel
      }
    });
  }
  /**
   * Delete an Organization
   * Delete an Organization
   * @param data The data for the request.
   * @param data.id The ID or name of the Organization
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteOrganizationsId(e) {
    return r(t, {
      method: "DELETE",
      url: "/organizations/{id}",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Get field on Organization
   * @param data The data for the request.
   * @param data.id The ID or name of the organization
   * @param data.field An organization [field](/cloud/trello/guides/rest-api/object-definitions/)
   * @returns Organization Success
   * @throws ApiError
   */
  static getOrganizationsIdField(e) {
    return r(t, {
      method: "GET",
      url: "/organizations/{id}/{field}",
      path: {
        id: e.id,
        field: e.field
      }
    });
  }
  /**
   * Get Actions for Organization
   * List the actions on a Workspace
   * @param data The data for the request.
   * @param data.id The ID or name of the organization
   * @returns Action Success
   * @throws ApiError
   */
  static getOrganizationsIdActions(e) {
    return r(t, {
      method: "GET",
      url: "/organizations/{id}/actions",
      path: {
        id: e.id
      }
    });
  }
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
  static getOrganizationsIdBoards(e) {
    return r(t, {
      method: "GET",
      url: "/organizations/{id}/boards",
      path: {
        id: e.id
      },
      query: {
        filter: e.filter,
        fields: e.fields
      }
    });
  }
  /**
   * Create Export for Organizations
   * Kick off CSV export for an organization
   * @param data The data for the request.
   * @param data.id The ID or name of the Workspace
   * @param data.attachments Whether the CSV should include attachments or not.
   * @returns Export Success
   * @throws ApiError
   */
  static postOrganizationsIdExports(e) {
    return r(t, {
      method: "POST",
      url: "/organizations/{id}/exports",
      path: {
        id: e.id
      },
      query: {
        attachments: e.attachments
      }
    });
  }
  /**
   * Retrieve Organization's Exports
   * Retrieve the exports that exist for the given organization
   * @param data The data for the request.
   * @param data.id The ID or name of the Workspace
   * @returns Export Success
   * @throws ApiError
   */
  static getOrganizationsIdExports(e) {
    return r(t, {
      method: "GET",
      url: "/organizations/{id}/exports",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Get the Members of an Organization
   * List the members in a Workspace
   * @param data The data for the request.
   * @param data.id The ID or name of the Organization
   * @returns unknown Success
   * @throws ApiError
   */
  static getOrganizationsIdMembers(e) {
    return r(t, {
      method: "GET",
      url: "/organizations/{id}/members",
      path: {
        id: e.id
      }
    });
  }
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
  static putOrganizationsIdMembers(e) {
    return r(t, {
      method: "PUT",
      url: "/organizations/{id}/members",
      path: {
        id: e.id
      },
      query: {
        email: e.email,
        fullName: e.fullName,
        type: e.type
      }
    });
  }
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
  static getOrganizationsIdMemberships(e) {
    return r(t, {
      method: "GET",
      url: "/organizations/{id}/memberships",
      path: {
        id: e.id
      },
      query: {
        filter: e.filter,
        member: e.member
      }
    });
  }
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
  static getOrganizationsIdMembershipsIdmembership(e) {
    return r(t, {
      method: "GET",
      url: "/organizations/{id}/memberships/{idMembership}",
      path: {
        id: e.id,
        idMembership: e.idMembership
      },
      query: {
        member: e.member
      }
    });
  }
  /**
   * Get the pluginData Scoped to Organization
   * Get organization scoped pluginData on this Workspace
   * @param data The data for the request.
   * @param data.id The ID or name of the organization
   * @returns unknown Success
   * @throws ApiError
   */
  static getOrganizationsIdPlugindata(e) {
    return r(t, {
      method: "GET",
      url: "/organizations/{id}/pluginData",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Get Tags of an Organization
   * List the organization's collections
   * @param data The data for the request.
   * @param data.id The ID or name of the Organization
   * @returns unknown Success
   * @throws ApiError
   */
  static getOrganizationsIdTags(e) {
    return r(t, {
      method: "GET",
      url: "/organizations/{id}/tags",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Create a Tag in Organization
   * Create a Tag in an Organization
   * @param data The data for the request.
   * @param data.id The ID or name of the Organization
   * @returns unknown Success
   * @throws ApiError
   */
  static postOrganizationsIdTags(e) {
    return r(t, {
      method: "POST",
      url: "/organizations/{id}/tags",
      path: {
        id: e.id
      }
    });
  }
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
  static putOrganizationsIdMembersIdmember(e) {
    return r(t, {
      method: "PUT",
      url: "/organizations/{id}/members/{idMember}",
      path: {
        id: e.id,
        idMember: e.idMember
      },
      query: {
        type: e.type
      }
    });
  }
  /**
   * Remove a Member from an Organization
   * Remove a member from a Workspace
   * @param data The data for the request.
   * @param data.id The ID or name of the organization
   * @param data.idMember The ID of the Member to remove from the Workspace
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteOrganizationsIdMembers(e) {
    return r(t, {
      method: "DELETE",
      url: "/organizations/{id}/members/{idMember}",
      path: {
        id: e.id,
        idMember: e.idMember
      }
    });
  }
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
  static putOrganizationsIdMembersIdmemberDeactivated(e) {
    return r(t, {
      method: "PUT",
      url: "/organizations/{id}/members/{idMember}/deactivated",
      path: {
        id: e.id,
        idMember: e.idMember
      },
      query: {
        value: e.value
      }
    });
  }
  /**
   * Update logo for an Organization
   * Set the logo image for a Workspace
   * @param data The data for the request.
   * @param data.id The ID or name of the Workspace
   * @param data.file Image file for the logo
   * @returns unknown Success
   * @throws ApiError
   */
  static postOrganizationsIdLogo(e) {
    return r(t, {
      method: "POST",
      url: "/organizations/{id}/logo",
      path: {
        id: e.id
      },
      query: {
        file: e.file
      }
    });
  }
  /**
   * Delete Logo for Organization
   * Delete a the logo from a Workspace
   * @param data The data for the request.
   * @param data.id The ID or name of the organization
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteOrganizationsIdLogo(e) {
    return r(t, {
      method: "DELETE",
      url: "/organizations/{id}/logo",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Remove a Member from an Organization and all Organization Boards
   * Remove a member from a Workspace and from all Workspace boards
   * @param data The data for the request.
   * @param data.id The ID or name of the organization
   * @param data.idMember The ID of the member to remove from the Workspace
   * @returns unknown Success
   * @throws ApiError
   */
  static organizationsIdMembersIdmemberAll(e) {
    return r(t, {
      method: "DELETE",
      url: "/organizations/{id}/members/{idMember}/all",
      path: {
        id: e.id,
        idMember: e.idMember
      }
    });
  }
  /**
   * Remove the associated Google Apps domain from a Workspace
   * Remove the associated Google Apps domain from a Workspace
   * @param data The data for the request.
   * @param data.id The ID or name of the organization
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteOrganizationsIdPrefsAssociateddomain(e) {
    return r(t, {
      method: "DELETE",
      url: "/organizations/{id}/prefs/associatedDomain",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Delete the email domain restriction on who can be invited to the Workspace
   * Remove the email domain restriction on who can be invited to the Workspace
   * @param data The data for the request.
   * @param data.id The ID or name of the organization
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteOrganizationsIdPrefsOrginviterestrict(e) {
    return r(t, {
      method: "DELETE",
      url: "/organizations/{id}/prefs/orgInviteRestrict",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Delete an Organization's Tag
   * Delete an organization's tag
   * @param data The data for the request.
   * @param data.id The ID or name of the organization
   * @param data.idTag The ID of the tag to delete
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteOrganizationsIdTagsIdtag(e) {
    return r(t, {
      method: "DELETE",
      url: "/organizations/{id}/tags/{idTag}",
      path: {
        id: e.id,
        idTag: e.idTag
      }
    });
  }
  /**
   * Get Organizations new billable guests
   * Used to check whether the given board has new billable guests on it.
   * @param data The data for the request.
   * @param data.id The ID or name of the organization
   * @param data.idBoard The ID of the board to check for new billable guests.
   * @returns unknown Success
   * @throws ApiError
   */
  static getOrganizationsIdNewbillableguestsIdboard(e) {
    return r(t, {
      method: "GET",
      url: "/organizations/{id}/newBillableGuests/{idBoard}",
      path: {
        id: e.id,
        idBoard: e.idBoard
      }
    });
  }
  /**
   * Get a Plugin
   * Get plugins
   * @param data The data for the request.
   * @param data.id The ID or name of the organization
   * @returns Plugin Success
   * @throws ApiError
   */
  static getPluginsId(e) {
    return r(t, {
      method: "GET",
      url: "/plugins/{id}/",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Update a Plugin
   * Update a Plugin
   * @param data The data for the request.
   * @param data.id The ID or name of the organization
   * @returns Plugin Success
   * @throws ApiError
   */
  static putPluginsId(e) {
    return r(t, {
      method: "PUT",
      url: "/plugins/{id}/",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Create a Listing for Plugin
   * Create a new listing for a given locale for your Power-Up
   * @param data The data for the request.
   * @param data.idPlugin The ID of the Power-Up for which you are creating a new listing.
   * @param data.requestBody
   * @returns PluginListing Success
   * @throws ApiError
   */
  static postPluginsIdpluginListing(e) {
    return r(t, {
      method: "POST",
      url: "/plugins/{idPlugin}/listing",
      path: {
        idPlugin: e.idPlugin
      },
      body: e.requestBody,
      mediaType: "application/json"
    });
  }
  /**
   * Get Plugin's Member privacy compliance
   * @param data The data for the request.
   * @param data.id The ID of the Power-Up
   * @returns unknown Success
   * @throws ApiError
   */
  static getPluginsIdComplianceMemberprivacy(e) {
    return r(t, {
      method: "GET",
      url: "/plugins/{id}/compliance/memberPrivacy",
      path: {
        id: e.id
      }
    });
  }
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
  static putPluginsIdpluginListingsIdlisting(e) {
    return r(t, {
      method: "PUT",
      url: "/plugins/{idPlugin}/listings/{idListing}",
      path: {
        idPlugin: e.idPlugin,
        idListing: e.idListing
      },
      body: e.requestBody,
      mediaType: "application/json"
    });
  }
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
  static getSearch(e) {
    return r(t, {
      method: "GET",
      url: "/search",
      query: {
        query: e.query,
        idBoards: e.idBoards,
        idOrganizations: e.idOrganizations,
        idCards: e.idCards,
        modelTypes: e.modelTypes,
        board_fields: e.boardFields,
        boards_limit: e.boardsLimit,
        board_organization: e.boardOrganization,
        card_fields: e.cardFields,
        cards_limit: e.cardsLimit,
        cards_page: e.cardsPage,
        card_board: e.cardBoard,
        card_list: e.cardList,
        card_members: e.cardMembers,
        card_stickers: e.cardStickers,
        card_attachments: e.cardAttachments,
        organization_fields: e.organizationFields,
        organizations_limit: e.organizationsLimit,
        member_fields: e.memberFields,
        members_limit: e.membersLimit,
        partial: e.partial
      }
    });
  }
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
  static getSearchMembers(e) {
    return r(t, {
      method: "GET",
      url: "/search/members/",
      query: {
        query: e.query,
        limit: e.limit,
        idBoard: e.idBoard,
        idOrganization: e.idOrganization,
        onlyOrgMembers: e.onlyOrgMembers
      }
    });
  }
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
  static getTokensToken(e) {
    return r(t, {
      method: "GET",
      url: "/tokens/{token}",
      path: {
        token: e.token
      },
      query: {
        fields: e.fields,
        webhooks: e.webhooks
      }
    });
  }
  /**
   * Get Token's Member
   * Retrieve information about a token's owner by token.
   * @param data The data for the request.
   * @param data.token
   * @param data.fields `all` or a comma-separated list of valid fields for [Member Object](/cloud/trello/guides/rest-api/object-definitions/).
   * @returns Member Success
   * @throws ApiError
   */
  static getTokensTokenMember(e) {
    return r(t, {
      method: "GET",
      url: "/tokens/{token}/member",
      path: {
        token: e.token
      },
      query: {
        fields: e.fields
      }
    });
  }
  /**
   * Get Webhooks for Token
   * Retrieve all webhooks created with a Token.
   * @param data The data for the request.
   * @param data.token
   * @returns Webhook Success
   * @throws ApiError
   */
  static getTokensTokenWebhooks(e) {
    return r(t, {
      method: "GET",
      url: "/tokens/{token}/webhooks",
      path: {
        token: e.token
      }
    });
  }
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
  static postTokensTokenWebhooks(e) {
    return r(t, {
      method: "POST",
      url: "/tokens/{token}/webhooks",
      path: {
        token: e.token
      },
      query: {
        description: e.description,
        callbackURL: e.callbackUrl,
        idModel: e.idModel
      }
    });
  }
  /**
   * Get a Webhook belonging to a Token
   * Retrieve a webhook created with a Token.
   * @param data The data for the request.
   * @param data.token
   * @param data.idWebhook ID of the [Webhooks](ref:webhooks) to retrieve.
   * @returns Webhook Success
   * @throws ApiError
   */
  static getTokensTokenWebhooksIdwebhook(e) {
    return r(t, {
      method: "GET",
      url: "/tokens/{token}/webhooks/{idWebhook}",
      path: {
        token: e.token,
        idWebhook: e.idWebhook
      }
    });
  }
  /**
   * Delete a Webhook created by Token
   * Delete a webhook created with given token.
   * @param data The data for the request.
   * @param data.token
   * @param data.idWebhook ID of the [Webhooks](ref:webhooks) to retrieve.
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteTokensTokenWebhooksIdwebhook(e) {
    return r(t, {
      method: "DELETE",
      url: "/tokens/{token}/webhooks/{idWebhook}",
      path: {
        token: e.token,
        idWebhook: e.idWebhook
      }
    });
  }
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
  static tokenstokenwebhooks1(e) {
    return r(t, {
      method: "PUT",
      url: "/tokens/{token}/webhooks/{idWebhook}",
      path: {
        token: e.token,
        idWebhook: e.idWebhook
      },
      query: {
        description: e.description,
        callbackURL: e.callbackUrl,
        idModel: e.idModel
      }
    });
  }
  /**
   * Delete a Token
   * Delete a token.
   * @param data The data for the request.
   * @param data.token
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteToken(e) {
    return r(t, {
      method: "DELETE",
      url: "/tokens/{token}/",
      path: {
        token: e.token
      }
    });
  }
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
  static postWebhooks(e) {
    return r(t, {
      method: "POST",
      url: "/webhooks/",
      query: {
        description: e.description,
        callbackURL: e.callbackUrl,
        idModel: e.idModel,
        active: e.active
      }
    });
  }
  /**
   * Get a Webhook
   * Get a webhook by ID. You must use the token query parameter and pass in the token the webhook was created under, or else you will encounter a 'webhook does not belong to token' error.
   * @param data The data for the request.
   * @param data.id ID of the webhook to retrieve.
   * @returns Webhook Success
   * @throws ApiError
   */
  static getWebhooksId(e) {
    return r(t, {
      method: "GET",
      url: "/webhooks/{id}",
      path: {
        id: e.id
      }
    });
  }
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
  static putWebhooksId(e) {
    return r(t, {
      method: "PUT",
      url: "/webhooks/{id}",
      path: {
        id: e.id
      },
      query: {
        description: e.description,
        callbackURL: e.callbackUrl,
        idModel: e.idModel,
        active: e.active
      }
    });
  }
  /**
   * Delete a Webhook
   * Delete a webhook by ID.
   * @param data The data for the request.
   * @param data.id ID of the webhook to retrieve.
   * @returns unknown Success
   * @throws ApiError
   */
  static deleteWebhooksId(e) {
    return r(t, {
      method: "DELETE",
      url: "/webhooks/{id}",
      path: {
        id: e.id
      }
    });
  }
  /**
   * Get a field on a Webhook
   * Get a field on a Webhook
   * @param data The data for the request.
   * @param data.id ID of the webhook.
   * @param data.field Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel`
   * @returns unknown Success
   * @throws ApiError
   */
  static webhooksidfield(e) {
    return r(t, {
      method: "GET",
      url: "/webhooks/{id}/{field}",
      path: {
        id: e.id,
        field: e.field
      }
    });
  }
}
export {
  L as $APIKey,
  A as $APIToken,
  _ as $Action,
  w as $ActionFields,
  F as $Attachment,
  G as $AttachmentFields,
  U as $BlockedKey,
  R as $Board,
  H as $BoardBackground,
  N as $BoardFields,
  V as $BoardStars,
  Fe as $CFValue,
  J as $Card,
  ce as $CardAging,
  Q as $CardFields,
  W as $Channel,
  K as $CheckItem,
  Z as $Checklist,
  Y as $ClaimableOrganizations,
  me as $Color,
  X as $CustomEmoji,
  ee as $CustomField,
  te as $CustomFieldItems,
  re as $CustomSticker,
  ie as $Emoji,
  se as $Enterprise,
  oe as $EnterpriseAdmin,
  ne as $EnterpriseAuditLog,
  Ge as $Error,
  de as $Export,
  pe as $ImageDescriptor,
  ue as $Label,
  fe as $Limits,
  ye as $LimitsObject,
  be as $ListFields,
  Ie as $Member,
  ge as $MemberFields,
  ke as $MemberPrefs,
  Te as $Membership,
  xe as $Memberships,
  Ce as $Notification,
  Se as $NotificationChannelSettings,
  Ee as $NotificationFields,
  Be as $Organization,
  ve as $OrganizationFields,
  Me as $PendingOrganizations,
  qe as $Plugin,
  Pe as $PluginData,
  ze as $PluginListing,
  De as $Prefs,
  Oe as $SavedSearch,
  $e as $Tag,
  Ae as $Token,
  Le as $TokenFields,
  je as $TokenPermission,
  we as $TransferrableOrganization,
  ae as $TrelloID,
  he as $TrelloList,
  le as $ViewFilter,
  _e as $Webhook,
  Ue as $customFieldItemValue,
  j as $posStringOrNumber,
  f as ApiError,
  E as CancelError,
  C as CancelablePromise,
  Ne as DefaultService,
  t as OpenAPI
};
