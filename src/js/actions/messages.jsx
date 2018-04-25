import {loadData,sendData,deleteData} from './../api.jsx';

/*actions*/
const collection = 'messages';

export function createMessage(message) {
	return (dispatch) => {
		sendData(collection,message)
		.then(()=>{
			dispatch(createMessageSuccess(message))
    	})
	}
}

export function deleteMessage(messageId) {
	return (dispatch) => {
		deleteData(collection,messageId)
		dispatch(deleteMessageSuccess(messageId))
	}
}

export function loadMessages() {
    return (dispatch) => {
		
		loadData(collection)
		.on('value',(snapshot)=>{
			let items = snapshot.val();
			let tmp=[];
			for (let item in items){
				tmp.push({
					id:item,
					name:items[item].name,
					email:items[item].email,
					message:items[item].message
				});
			}
			dispatch(loadMessagesSuccess(tmp));
		});
        
    };
}

/*reducers call*/

export function deleteMessageSuccess(messageId) {
    return {
        type: 'MESSAGES_DELETE_SUCCESS',
        messageId
    };
}
export function createMessageSuccess(message) {
    return {
        type: 'MESSAGES_CREATE_SUCCESS',
        message
    };
}
export function loadMessagesSuccess(messages) {
    return {
        type: 'MESSAGES_LOAD_SUCCESS',
        messages
    };
}