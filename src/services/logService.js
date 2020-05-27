import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn:
      "https://613054bf97204d46bb3d72408050d190@o396420.ingest.sentry.io/5249735",
  });
}
function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
