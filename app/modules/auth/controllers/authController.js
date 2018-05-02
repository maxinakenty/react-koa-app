const pick = require('lodash/pick');
const { User } = require('../../users');

const signUp = async ctx => {
  const { _id } = await User.create(pick(ctx.request.body, User.createFields));
  const user = await User.findOneWithPublicFields({ _id });
  ctx.body = { data: user };
};

module.exports = {
  signUp,
};
