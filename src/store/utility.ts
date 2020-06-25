/**
 * Function to update object in a more clean manner
 * @function updateObject
 * @param {object} oldObject - the object before the action
 * @param {object} updatedProperties - the object after the action
 * @returns {object} - Updated object
 */
export const updateObject = (oldObject:object, updatedProperties: object) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const convertDataToArr = (datas: object) => {

    return Object.values(datas);

}