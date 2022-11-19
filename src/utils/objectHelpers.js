export const updateObjectInArray = (
	items,
	itemPropName,
	itemId,
	newObjProp
) => {
	return items.map(user => {
		if (user[itemPropName] === itemId) {
			return { ...user, ...newObjProp }
		}
		return user
	})
}
