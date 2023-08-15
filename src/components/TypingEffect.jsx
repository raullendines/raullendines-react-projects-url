import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingEffect = ({ array, key }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      typedRef.current.destroy();
    }

    const typed = new Typed(".auto-type", {
      strings: array,
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      onComplete: (self) => {
        self.el.insertAdjacentHTML('beforeend', '<span class="typing-cursor">&#9608;</span>');
      }
    });

    typedRef.current = typed;

    return () => {
      typed.destroy();
    };
  }, [array, key]);

  return <span className="auto-type"></span>;
};

export default TypingEffect;
