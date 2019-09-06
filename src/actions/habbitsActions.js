import { postHabbit } from '../services/habbitsApi';

export const CREATE_HABIT = 'CREATE_HABBIT';

export const createHabbit = (habbit, description) => ({
  type: CREATE_HABIT,
  payload: postHabbit(habbit, description)
});
