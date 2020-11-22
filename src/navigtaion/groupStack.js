import React from 'react';

export default function groupStack (Stack, screens) {
  return screens.map(([Component, options]) => {
    const [key] = Object.keys(Component);
    return (
      <Stack.Screen
        key={key}
        name={key}
        component={Component[key]}
        options={options}
      />
    );
  });
}
