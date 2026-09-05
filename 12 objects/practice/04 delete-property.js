const userGroup = {
  name: "Ali",
  group: "FN-12"
};

delete userGroup.group;

const hasGroup = "group" in userGroup;
const hasName = "name" in userGroup;
const deletedValue = userGroup.group;

module.exports = { hasGroup, hasName, deletedValue };
