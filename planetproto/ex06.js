var machine = {}

const robot = Object.create(machine);
const robby = Object.create(robot);

claim(machine.isPrototypeOf(robby), true);
claim(robot.isPrototypeOf(robby), true);
claim.same(Object.getPrototypeOf(robby), robot);

module.exports = {
  machine: machine,
  robot: robot,
  robby: robby,
};
