"use strict";
var FriendListBackground = "BrickWall";
var FriendListContent = "";

// Loads the online friend list from the server
function FriendListLoad() {
	ElementCreateDiv("FriendList");
	ElementPositionFix("FriendList", 36, 0, 70, 2000, 930);
	ElementContent("FriendList", FriendListContent);
	ServerSend("AccountQuery", {Query: "OnlineFriends"});
}

// Run the friend list screen - Draw the controls
function FriendListRun() {
	DrawText(TextGet("OnlineFriend"), 340, 35, "White", "Gray");
	DrawText(TextGet("MemberNumber"), 800, 35, "White", "Gray");
	DrawText(TextGet("ChatRoomName"), 1270, 35, "White", "Gray");
	DrawText(TextGet("Action"), 1685, 35, "White", "Gray");
	ElementPositionFix("FriendList", 36, 5, 75, 1885, 890);
	DrawButton(1935, 5, 60, 60, "", "White", "Icons/Small/Exit.png");
}

// When the user clicks on the screen
function FriendListClick() {
	if ((MouseX >= 1935) && (MouseX < 1995) && (MouseY >= 5) && (MouseY < 65)) {
		ElementRemove("FriendList");
		CommonSetScreen("Character", "InformationSheet");
	}
}

// Loads the friend list data in the div
function FriendListLoadFriendList(data) {
	var BeepCaption = DialogFind(Player, "Beep");
	var DeleteCaption = DialogFind(Player, "Delete");
	for (var A = 0; A < 50; A++)
	for (var F = 0; F < data.length; F++) {
		FriendListContent = FriendListContent + "<div class='FriendListRow'>";
		FriendListContent = FriendListContent + "<div class='FriendListTextColumn FriendListFirstColumn'>" + data[F].MemberName + "</div>";
		FriendListContent = FriendListContent + "<div class='FriendListTextColumn'>" + data[F].MemberNumber.toString() + "</div>";
		FriendListContent = FriendListContent + "<div class='FriendListTextColumn'>" + ((data[F].ChatRoomName == null) ? "-" : data[F].ChatRoomName) + "</div>";
		FriendListContent = FriendListContent + "<div class='FriendListLinkColumn' onClick='FriendListBeep(" + data[F].MemberNumber.toString() + ")'>" + BeepCaption + "</div>";
		FriendListContent = FriendListContent + "<div class='FriendListLinkColumn' onClick='FriendListDelete(" + data[F].MemberNumber.toString() + ")'>" + DeleteCaption + "</div>";
		FriendListContent = FriendListContent + "</div>";
	}
	ElementContent("FriendList", FriendListContent);
}

// When the user wants to delete someone from her friend list
function FriendListDelete(MemberNumber) {
}

// When the user wants to beep someone
function FriendListBeep(MemberNumber) {
}