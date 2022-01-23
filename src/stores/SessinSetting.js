import { writable } from 'svelte/store';

const createWritableStore = (key, startValue) => {
  const json = localStorage.getItem(key);
  if (json) {
    var value = JSON.parse(json);
  }
  value = value == null ? startValue : value;

  const { subscribe, set } = writable(value);

	var result = {
    subscribe,
    set
  };
  result.subscribe(current => {
    localStorage.setItem(key, JSON.stringify(current));
  });

  return result;
}

export const has_setting = writable(false);
export const prep_time   = createWritableStore('prep_time',   5);
export const shijo_time  = createWritableStore('shijo_time',  45);
export const kinhin_time = createWritableStore('kinhin_time', 10);
export const section_num = createWritableStore('section_num', 2);

// specials
export const different_time_for_first_session = createWritableStore('different_time_for_first_session', false);
export const time_for_first_session           = createWritableStore('time_for_first_session', 60);

