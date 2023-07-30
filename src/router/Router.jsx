/* eslint-disable react/prop-types */
import { useEffect, useState, Children, isValidElement } from "react";
import { match } from 'path-to-regexp';
import { EVENTS } from "../js/utils/constants";
import { getCurrentPath } from "../js/utils/utils.js";

export default function Router({ children, routes = [], defaultComponent: DefaultComponent = () => <></> }) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath());
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  const routesFromChildren = Children.map(children, (child) => {
    // Check if the child element is a valid React element
    if (!isValidElement(child)) return null;

    // Check if the 'type' is available before destructure
    const { name } = child.type || {};

    const isRoute = name === 'Route';
    return isRoute ? child.props : null;
  });

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean);

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true;

    const matcherUrl = match(path, { decode: decodeURIComponent });
    const matched = matcherUrl(currentPath);
    if (!matched) return false;

    routeParams = matched.params;
    return true;
  })?.Component;

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />;
}
