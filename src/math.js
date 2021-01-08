const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi;

export { doublePi, triplePi };

// Note: since this is a .js File, and not JSX, we do
// not need to import "react".
