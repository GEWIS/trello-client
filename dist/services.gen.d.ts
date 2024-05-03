import { $OpenApiTs } from './types.gen';
import { CancelablePromise } from './core/CancelablePromise';

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
    static getBoardsId(data: $OpenApiTs['/boards/{id}']['get']['req']): CancelablePromise<$OpenApiTs['/boards/{id}']['get']['res'][200] | $OpenApiTs['/boards/{id}']['get']['res'][200]>;
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
