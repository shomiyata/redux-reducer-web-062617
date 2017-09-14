export function manageFriends(state, action){
  switch (action.type) {
      case 'ADD_FRIEND':
        return {"friends": [...state.friends,
          {"hometown": action.friend.hometown,
          "id": action.friend.id,
          "name": action.friend.name}]}
      case 'REMOVE_FRIEND':
        let newFriends = {"friends": state.friends.filter(obj => obj.id !== action.id)}
        return newFriends
      default:
        return state;
  }
}
