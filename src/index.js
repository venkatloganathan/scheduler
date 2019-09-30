import './assets/app.scss'
import LoadScheduler from "./LoadScheduler";

(function initSinglePageApplication() {
  const loadScheduler = new LoadScheduler();
  loadScheduler.initialise();
})();

