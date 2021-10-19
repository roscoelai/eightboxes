/******************* 
 * Eightboxes Test *
 *******************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'eightBoxes';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'imgs/end-experiment.png', 'path': 'imgs/end-experiment.png'},
    {'name': 'imgs/apple.png', 'path': 'imgs/apple.png'},
    {'name': 'imgs/strawberry.png', 'path': 'imgs/strawberry.png'},
    {'name': 'imgs/continue.png', 'path': 'imgs/continue.png'},
    {'name': 'imgs/grapes.png', 'path': 'imgs/grapes.png'},
    {'name': 'imgs/watermelon.png', 'path': 'imgs/watermelon.png'},
    {'name': 'conditions.csv', 'path': 'conditions.csv'},
    {'name': 'imgs/box.png', 'path': 'imgs/box.png'},
    {'name': 'imgs/pear.png', 'path': 'imgs/pear.png'},
    {'name': 'imgs/banana.png', 'path': 'imgs/banana.png'},
    {'name': 'imgs/empty-box.png', 'path': 'imgs/empty-box.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instrClock;
var text1;
var cont1;
var mouse1;
var part1Clock;
var DEBUG;
var RANDOMIZE;
var BOX_HALF_WIDTH;
var box_width;
var obj_width;
var OBJ_DURATION;
var SHOW_TIMER;
var BLANK_DURATION;
var BOX_SIZE;
var OBJ_SIZE;
var BLANK_SIZE;
var BOX_POS;
var boxes;
var highlighter;
var IMG_PATHS;
var objs6;
var OBJ_POS;
var CONT_BUTTON_SIZE;
var cont_button;
var idxs8;
var idx;
var text2;
var mouse2;
var debugTimer;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text1',
    text: 'Instructions:\n\n- There will be 8 boxes on the screen\n- Some boxes will contain (a picture of) a fruit\n- Their positions will be revealed for a short period of time before being hidden\n- As fast as you can, find all the hidden fruits without clicking on empty boxes\n- Errors will be recorded\n- Time taken will be recorded (starting from when the fruits are hidden)\n- Once a fruit has been "found" the box will become empty\n- There will be a practice trial, followed by 6 trials\n\nDevelopment/Debugging:\n- Picture/Blank show duration set to 1 second to speed up trials\n- No inter-trial instructions\n- There is a very inconspicuous timer near the bottom-right of the screen\n',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.025,  wrapWidth: 0.98, ori: 0.0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  cont1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cont1', units : 'height', 
    image : 'imgs/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0.32, 0.112],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse1.mouseClock = new util.Clock();
  // Initialize components for Routine "part1"
  part1Clock = new util.Clock();
  DEBUG = true;
  RANDOMIZE = true;
  BOX_HALF_WIDTH = 0.1;
  box_width = (BOX_HALF_WIDTH * 2);
  obj_width = (box_width * 0.9);
  if (DEBUG) {
      OBJ_DURATION = 1.0;
      SHOW_TIMER = true;
  } else {
      OBJ_DURATION = 3.0;
      SHOW_TIMER = false;
  }
  BLANK_DURATION = OBJ_DURATION;
  BOX_SIZE = [box_width, box_width];
  OBJ_SIZE = [obj_width, obj_width];
  BLANK_SIZE = OBJ_SIZE;
  BOX_POS = [[((- 3) * BOX_HALF_WIDTH), BOX_HALF_WIDTH], [(- BOX_HALF_WIDTH), BOX_HALF_WIDTH], [BOX_HALF_WIDTH, BOX_HALF_WIDTH], [(3 * BOX_HALF_WIDTH), BOX_HALF_WIDTH], [((- 3) * BOX_HALF_WIDTH), (- BOX_HALF_WIDTH)], [(- BOX_HALF_WIDTH), (- BOX_HALF_WIDTH)], [BOX_HALF_WIDTH, (- BOX_HALF_WIDTH)], [(3 * BOX_HALF_WIDTH), (- BOX_HALF_WIDTH)]];
  boxes = [];
  for (var i, _pj_c = 0, _pj_a = util.range(8), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      boxes.push(new visual.ImageStim({"win": psychoJS.window, "name": `box${(i + 1)}`, "image": "imgs/box.png", "pos": BOX_POS[i], "size": BOX_SIZE, "opacity": 0.5}));
  }
  highlighter = new visual.ImageStim({"win": psychoJS.window, "name": "highlighter", "image": "imgs/box.png", "pos": BOX_POS[i], "size": BOX_SIZE, "opacity": 0.5});
  IMG_PATHS = ["imgs/apple.png", "imgs/banana.png", "imgs/grapes.png", "imgs/pear.png", "imgs/strawberry.png", "imgs/watermelon.png"];
  objs6 = [];
  for (var i, _pj_c = 0, _pj_a = util.range(6), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      objs6.push(new visual.ImageStim({"win": psychoJS.window, "name": `obj${(i + 1)}`, "image": IMG_PATHS[i], "pos": [0, 0], "size": OBJ_SIZE, "opacity": 1.0}));
  }
  if ((! RANDOMIZE)) {
      OBJ_POS = {"Practice trial": [2, 5], "Trial 1": [1, 7], "Trial 2": [0, 3, 5], "Trial 3": [1, 2, 4, 6], "Trial 4": [1, 3, 4, 7], "Trial 5": [0, 2, 4, 6, 7], "Trial 6": [0, 2, 3, 4, 5, 7]};
  }
  CONT_BUTTON_SIZE = [0.32, 0.112];
  cont_button = new visual.ImageStim({"win": psychoJS.window, "name": "cont_button", "image": "imgs/continue.png", "pos": [0, (- 0.4)], "size": [0, 0]});
  idxs8 = [0, 1, 2, 3, 4, 5, 6, 7];
  idx = null;
  
  text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse2.mouseClock = new util.Clock();
  debugTimer = new visual.TextStim({
    win: psychoJS.window,
    name: 'debugTimer',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.45)], height: 0.01,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: 0.2,
    depth: -3.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instr'-------
    t = 0;
    instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse1
    mouse1.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouse1.mouseClock.reset();
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(text1);
    instrComponents.push(cont1);
    instrComponents.push(mouse1);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function instrRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instr'-------
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text1* updates
    if (t >= 0.0 && text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text1.tStart = t;  // (not accounting for frame time here)
      text1.frameNStart = frameN;  // exact frame index
      
      text1.setAutoDraw(true);
    }

    
    // *cont1* updates
    if (t >= 0.0 && cont1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cont1.tStart = t;  // (not accounting for frame time here)
      cont1.frameNStart = frameN;  // exact frame index
      
      cont1.setAutoDraw(true);
    }

    // *mouse1* updates
    if (t >= 0.0 && mouse1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse1.tStart = t;  // (not accounting for frame time here)
      mouse1.frameNStart = frameN;  // exact frame index
      
      mouse1.status = PsychoJS.Status.STARTED;
      prevButtonState = mouse1.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [cont1]) {
            if (obj.contains(mouse1)) {
              gotValidClick = true;
              mouse1.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd() {
  return async function () {
    //------Ending Routine 'instr'-------
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(part1RoutineBegin(snapshot));
      trialsLoopScheduler.add(part1RoutineEachFrame());
      trialsLoopScheduler.add(part1RoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var idxs;
var objs;
var correct_boxes;
var clicked_boxes;
var click_times;
var visible;
var visible_t;
var initial_reveal;
var first_click;
var update_time_elapsed;
var show_continue;
var trial_stop;
var obj_count;
var task_time_start;
var task_time_elapsed;
var part1Components;
function part1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'part1'-------
    t = 0;
    part1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    cont_button.setSize([0, 0], {"log": false});
    cont_button.setAutoDraw(false, {"log": false});
    for (var box, _pj_c = 0, _pj_a = boxes, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        box = _pj_a[_pj_c];
        box.autoDraw = true;
    }
    if (RANDOMIZE) {
        util.shuffle(objs6);
        util.shuffle(idxs8);
        idxs = idxs8.slice(0, n_fruits);
    } else {
        idxs = OBJ_POS[trial_name];
    }
    objs = [null, null, null, null, null, null, null, null];
    correct_boxes = [];
    for (var i, _pj_c = 0, _pj_a = util.range(n_fruits), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        idx = idxs[i];
        objs[idx] = objs6[i];
        objs[idx].setPos(BOX_POS[idx], {"log": false});
        correct_boxes.push(`box${(idx + 1)}`);
    }
    correct_boxes.sort();
    for (var i, _pj_c = 0, _pj_a = util.range(8), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((objs[i] === null)) {
            objs[i] = new visual.ImageStim({"win": psychoJS.window, "name": `blank${(i + 1)}`, "image": "imgs/empty-box.png", "pos": BOX_POS[i], "size": BLANK_SIZE});
        }
    }
    clicked_boxes = [];
    click_times = [];
    visible = [false, false, false, false, false, false, false, false];
    visible_t = [null, null, null, null, null, null, null, null];
    initial_reveal = true;
    first_click = true;
    update_time_elapsed = false;
    show_continue = false;
    trial_stop = false;
    obj_count = 0;
    task_time_start = null;
    task_time_elapsed = 0;
    
    text2.setText(trial_name);
    // setup some python lists for storing info about the mouse2
    mouse2.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouse2.mouseClock.reset();
    // keep track of which components have finished
    part1Components = [];
    part1Components.push(text2);
    part1Components.push(mouse2);
    part1Components.push(debugTimer);
    
    for (const thisComponent of part1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
function part1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'part1'-------
    // get current time
    t = part1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (update_time_elapsed) {
        task_time_elapsed = (t - task_time_start);
    }
    if (trial_stop) {
    } else {
        if (show_continue) {
            for (var box, _pj_c = 0, _pj_a = boxes, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                box = _pj_a[_pj_c];
                if ((box !== null)) {
                    box.setAutoDraw(false, {"log": false});
                }
            }
            cont_button.setSize(CONT_BUTTON_SIZE, {"log": false});
            cont_button.setAutoDraw(true, {"log": false});
            highlighter.setSize([0, 0], {"log": false});
            trial_stop = true;
        } else {
            if (initial_reveal) {
                for (var obj, _pj_c = 0, _pj_a = objs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                    obj = _pj_a[_pj_c];
                    if (_pj.in_es6("obj", obj.name)) {
                        obj.draw();
                    }
                }
                if ((t > reveal_seconds)) {
                    for (var obj, _pj_c = 0, _pj_a = objs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                        obj = _pj_a[_pj_c];
                        obj.setAutoDraw(false, {"log": false});
                    }
                    highlighter.setSize(BOX_SIZE, {"log": false});
                    initial_reveal = false;
                }
            } else {
                for (var i, _pj_c = 0, _pj_a = util.range(8), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                    i = _pj_a[_pj_c];
                    if (visible[i]) {
                        continue;
                    }
                    if (mouse2.isPressedIn(boxes[i])) {
                        if (first_click) {
                            task_time_start = t;
                            update_time_elapsed = true;
                            first_click = false;
                        }
                        clicked_boxes.push(boxes[i].name);
                        click_times.push(task_time_elapsed);
                        visible[i] = true;
                        visible_t[i] = t;
                        objs[i].setAutoDraw(true, {"log": false});
                        if ((! _pj.in_es6("blank", objs[i].name))) {
                            obj_count += 1;
                            if ((obj_count >= n_fruits)) {
                                update_time_elapsed = false;
                            }
                        }
                        break;
                    } else {
                        if (boxes[i].contains(mouse2)) {
                            highlighter.setPos(boxes[i].pos, {"log": false});
                            highlighter.draw();
                            break;
                        }
                    }
                }
            }
        }
    }
    for (var i, _pj_c = 0, _pj_a = util.range(8), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((visible[i] && ((t - visible_t[i]) >= OBJ_DURATION))) {
            objs[i].setAutoDraw(false, {"log": false});
            objs[i] = new visual.ImageStim({"win": psychoJS.window, "name": `${objs[i].name}_blank`, "image": "imgs/empty-box.png", "pos": BOX_POS[i], "size": BLANK_SIZE});
            visible[i] = false;
        }
    }
    if (((util.sum(visible) <= 0) && (obj_count >= n_fruits))) {
        show_continue = true;
    }
    
    
    // *text2* updates
    if (t >= 0.0 && text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text2.tStart = t;  // (not accounting for frame time here)
      text2.frameNStart = frameN;  // exact frame index
      
      text2.setAutoDraw(true);
    }

    // *mouse2* updates
    if (t >= 0.0 && mouse2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse2.tStart = t;  // (not accounting for frame time here)
      mouse2.frameNStart = frameN;  // exact frame index
      
      mouse2.status = PsychoJS.Status.STARTED;
      prevButtonState = mouse2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [cont_button]) {
            if (obj.contains(mouse2)) {
              gotValidClick = true;
              mouse2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *debugTimer* updates
    if ((SHOW_TIMER) && debugTimer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debugTimer.tStart = t;  // (not accounting for frame time here)
      debugTimer.frameNStart = frameN;  // exact frame index
      
      debugTimer.setAutoDraw(true);
    }

    
    if (debugTimer.status === PsychoJS.Status.STARTED){ // only update if being drawn
      debugTimer.setText(util.round(task_time_elapsed, 3), false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of part1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function part1RoutineEnd() {
  return async function () {
    //------Ending Routine 'part1'-------
    for (const thisComponent of part1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData("clicked_boxes", clicked_boxes);
    psychoJS.experiment.addData("click_times", click_times);
    psychoJS.experiment.addData("time_taken_sec", click_times.pop());
    psychoJS.experiment.addData("correct_boxes", correct_boxes);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "part1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
