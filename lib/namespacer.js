/*
 * namespacer
 * https://github.com/kenkouot/namespacer
 *
 * Copyright (c) 2013 Kenneth Kouot
 * Licensed under the MIT license.
 */

module.exports = namespacer;
function namespacer(str, ns, obj) {

  var parts
    , i;

  if (!str) throw new Error('Please specify a period separated list of property names');
  if (!ns) ns = window;
  if (typeof ns === 'string') ns = window[ns] = {};
  parts = str.split('.');
  for (i = 0; i < parts.length; i++) {
    // if a obj is passed in and loop is assigning last variable in namespace
    if (i === parts.length - 1 && obj) {
      ns = ns[parts[i]] = obj;
   } else {
      // if namespace doesn't exist, instantiate as empty object
      ns = ns[parts[i]] = ns[parts[i]] || {};
    }
  }
  return ns;
}

