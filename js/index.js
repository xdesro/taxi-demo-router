import { Core, Transition } from "@unseenco/taxi";
const colors = ['red', 'orange', 'goldenrod', 'green', 'blue', 'purple']

class RegularTransition extends Transition {
  onLeave({ from, trigger, done }) {
    // do something ...
    console.log("playing RegularTransition.onLeave");
    done();
  }
  onEnter({ to, trigger, done }) {
    // do something else ...
    console.log("playing RegularTransition.onEnter");
    done();
  }
}
class TestTransition extends Transition {
  onLeave({ from, trigger, done }) {
    // do something ...
    console.log("playing TestTransition.onLeave");
    done();
  }
  onEnter({ to, trigger, done }) {
    // do something else ...
    console.log("playing TestTransition.onEnter");
    // idk something random to make it more clear transition is happening or not
    to.style.color = colors[Math.floor(Math.random() * colors.length)];
    done();
  }
}

const t = new Core({
  transitions: {
    default: RegularTransition,
    otherTransition: TestTransition
  },
});

t.addRoute('/', '/path', 'otherTransition')