import pick from 'lodash/pick';
import { User } from '../../users';

export const signUp = async ctx => {
  const { _id } = await User.create(pick(ctx.request.body, User.createFields));
  const user = await User.findOneWithPublicFields({ _id });
  ctx.body = { data: user };
};
