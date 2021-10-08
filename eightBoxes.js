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
    {'name': 'imgs/banana.png', 'path': 'imgs/banana.png'},
    {'name': 'imgs/empty-box.png', 'path': 'imgs/empty-box.png'},
    {'name': 'imgs/strawberry.png', 'path': 'imgs/strawberry.png'},
    {'name': 'imgs/pear.png', 'path': 'imgs/pear.png'},
    {'name': 'imgs/watermelon.png', 'path': 'imgs/watermelon.png'},
    {'name': 'imgs/end-experiment.png', 'path': 'imgs/end-experiment.png'},
    {'name': 'conditions.csv', 'path': 'conditions.csv'},
    {'name': 'imgs/apple.png', 'path': 'imgs/apple.png'},
    {'name': 'imgs/grapes.png', 'path': 'imgs/grapes.png'},
    {'name': 'imgs/continue.png', 'path': 'imgs/continue.png'}
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
var instr1;
var contButton1;
var clickCont1;
var part1Clock;
var DEBUG;
var OBJ_DURATION;
var SHOW_TIMER;
var BLANK_DURATION;
var OFFSCREEN;
var HALF_LENGTH;
var b;
var l;
var BOX_SIZE;
var BOX_FILL_COLOR;
var BOX_LINE_COLOR;
var BOX_OPACITY;
var OBJ_SIZE;
var BLANK_SIZE;
var BOX_POS;
var IMG_SRCS;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var highlighter;
var blank;
var contButton2;
var endButton2;
var clickCont2;
var debugTimer;
var headText;
var terminate_experiment;
var consec_errors;
var objs6;
var idxs8;
var boxes;
var apply;
var offscreen;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr1',
    text: 'Instructions:\n\n- There will be 8 boxes on the screen\n- Some boxes will contain (a picture of) a fruit\n- Their positions will be revealed for a short period of time before being hidden\n- As fast as you can, find all the hidden fruits without clicking on empty boxes\n- Errors will be recorded\n- Time taken will be recorded (starting from when the fruits are hidden)\n- Once a fruit has been "found" the box will become empty\n- There will be a practice trial, followed by 6 trials\n\nDevelopment/Debugging:\n- Picture/Blank show duration set to 1 second to speed up trials\n- No inter-trial instructions\n- There is a very inconspicuous timer near the bottom-right of the screen\n',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.025,  wrapWidth: 0.98, ori: 0.0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  contButton1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'contButton1', units : 'height', 
    image : 'imgs/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0.32, 0.112],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  clickCont1 = new core.Mouse({
    win: psychoJS.window,
  });
  clickCont1.mouseClock = new util.Clock();
  // Initialize components for Routine "part1"
  part1Clock = new util.Clock();
  DEBUG = true;
  if (DEBUG) {
      OBJ_DURATION = 1.0;
      SHOW_TIMER = true;
  } else {
      OBJ_DURATION = 3.0;
      SHOW_TIMER = false;
  }
  BLANK_DURATION = OBJ_DURATION;
  OFFSCREEN = [1.0, 1.0];
  HALF_LENGTH = 0.1;
  b = HALF_LENGTH;
  l = (b * 2);
  BOX_SIZE = [l, l];
  BOX_FILL_COLOR = "black";
  BOX_LINE_COLOR = "black";
  BOX_OPACITY = 0.3;
  OBJ_SIZE = [(0.9 * l), (0.9 * l)];
  BLANK_SIZE = OBJ_SIZE;
  BOX_POS = [[((- 3) * b), b], [(- b), b], [b, b], [(3 * b), b], [((- 3) * b), (- b)], [(- b), (- b)], [b, (- b)], [(3 * b), (- b)]];
  IMG_SRCS = ["imgs/apple.png", "imgs/banana.png", "imgs/grapes.png", "imgs/pear.png", "imgs/strawberry.png", "imgs/watermelon.png"];
  
  box1 = new visual.Rect ({
    win: psychoJS.window, name: 'box1', 
    width: BOX_SIZE[0], height: BOX_SIZE[1],
    ori: 0.0, pos: BOX_POS[0],
    lineWidth: 1.0, lineColor: new util.Color(BOX_LINE_COLOR),
    fillColor: new util.Color(BOX_FILL_COLOR),
    opacity: BOX_OPACITY, depth: -1, interpolate: true,
  });
  
  box2 = new visual.Rect ({
    win: psychoJS.window, name: 'box2', 
    width: BOX_SIZE[0], height: BOX_SIZE[1],
    ori: 0.0, pos: BOX_POS[1],
    lineWidth: 1.0, lineColor: new util.Color(BOX_LINE_COLOR),
    fillColor: new util.Color(BOX_FILL_COLOR),
    opacity: BOX_OPACITY, depth: -2, interpolate: true,
  });
  
  box3 = new visual.Rect ({
    win: psychoJS.window, name: 'box3', 
    width: BOX_SIZE[0], height: BOX_SIZE[1],
    ori: 0.0, pos: BOX_POS[2],
    lineWidth: 1.0, lineColor: new util.Color(BOX_LINE_COLOR),
    fillColor: new util.Color(BOX_FILL_COLOR),
    opacity: BOX_OPACITY, depth: -3, interpolate: true,
  });
  
  box4 = new visual.Rect ({
    win: psychoJS.window, name: 'box4', 
    width: BOX_SIZE[0], height: BOX_SIZE[1],
    ori: 0.0, pos: BOX_POS[3],
    lineWidth: 1.0, lineColor: new util.Color(BOX_LINE_COLOR),
    fillColor: new util.Color(BOX_FILL_COLOR),
    opacity: BOX_OPACITY, depth: -4, interpolate: true,
  });
  
  box5 = new visual.Rect ({
    win: psychoJS.window, name: 'box5', 
    width: BOX_SIZE[0], height: BOX_SIZE[1],
    ori: 0.0, pos: BOX_POS[4],
    lineWidth: 1.0, lineColor: new util.Color(BOX_LINE_COLOR),
    fillColor: new util.Color(BOX_FILL_COLOR),
    opacity: BOX_OPACITY, depth: -5, interpolate: true,
  });
  
  box6 = new visual.Rect ({
    win: psychoJS.window, name: 'box6', 
    width: BOX_SIZE[0], height: BOX_SIZE[1],
    ori: 0.0, pos: BOX_POS[5],
    lineWidth: 1.0, lineColor: new util.Color(BOX_LINE_COLOR),
    fillColor: new util.Color(BOX_FILL_COLOR),
    opacity: BOX_OPACITY, depth: -6, interpolate: true,
  });
  
  box7 = new visual.Rect ({
    win: psychoJS.window, name: 'box7', 
    width: BOX_SIZE[0], height: BOX_SIZE[1],
    ori: 0.0, pos: BOX_POS[6],
    lineWidth: 1.0, lineColor: new util.Color(BOX_LINE_COLOR),
    fillColor: new util.Color(BOX_FILL_COLOR),
    opacity: BOX_OPACITY, depth: -7, interpolate: true,
  });
  
  box8 = new visual.Rect ({
    win: psychoJS.window, name: 'box8', 
    width: BOX_SIZE[0], height: BOX_SIZE[1],
    ori: 0.0, pos: BOX_POS[7],
    lineWidth: 1.0, lineColor: new util.Color(BOX_LINE_COLOR),
    fillColor: new util.Color(BOX_FILL_COLOR),
    opacity: BOX_OPACITY, depth: -8, interpolate: true,
  });
  
  highlighter = new visual.Rect ({
    win: psychoJS.window, name: 'highlighter', 
    width: BOX_SIZE[0], height: BOX_SIZE[1],
    ori: 0.0, pos: OFFSCREEN,
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: BOX_OPACITY, depth: -9, interpolate: true,
  });
  
  blank = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blank', units : undefined, 
    image : 'imgs/empty-box.png', mask : undefined,
    ori : 0.0, pos : OFFSCREEN, size : BLANK_SIZE,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  contButton2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'contButton2', units : undefined, 
    image : 'imgs/continue.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.32, 0.112],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  endButton2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'endButton2', units : undefined, 
    image : 'imgs/end-experiment.png', mask : undefined,
    ori : 0.0, pos : OFFSCREEN, size : [0.537, 0.112],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  clickCont2 = new core.Mouse({
    win: psychoJS.window,
  });
  clickCont2.mouseClock = new util.Clock();
  debugTimer = new visual.TextStim({
    win: psychoJS.window,
    name: 'debugTimer',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.45)], height: 0.01,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: 0.2,
    depth: -14.0 
  });
  
  headText = new visual.TextStim({
    win: psychoJS.window,
    name: 'headText',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -15.0 
  });
  
  terminate_experiment = false;
  consec_errors = 0;
  objs6 = [];
  for (var i, _pj_c = 0, _pj_a = util.range(6), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      objs6.push(new visual.ImageStim({"win": psychoJS.window, "name": `obj${(i + 1)}`, "image": IMG_SRCS[i], "pos": OFFSCREEN, "size": OBJ_SIZE}));
  }
  idxs8 = [0, 1, 2, 3, 4, 5, 6, 7];
  boxes = [box1, box2, box3, box4, box5, box6, box7, box8];
  function _apply(objs, f) {
      for (var obj, _pj_c = 0, _pj_a = objs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          obj = _pj_a[_pj_c];
          if ((obj !== null)) {
              f(obj);
          }
      }
  }
  apply = _apply;
  function _offscreen(objs) {
      for (var obj, _pj_c = 0, _pj_a = objs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          obj = _pj_a[_pj_c];
          obj.setPos(OFFSCREEN, {"log": false});
          obj.setAutoDraw(false, {"log": false});
      }
  }
  offscreen = _offscreen;
  
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
    // setup some python lists for storing info about the clickCont1
    clickCont1.clicked_name = [];
    gotValidClick = false; // until a click is received
    clickCont1.mouseClock.reset();
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instr1);
    instrComponents.push(contButton1);
    instrComponents.push(clickCont1);
    
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
    
    // *instr1* updates
    if (t >= 0.0 && instr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr1.tStart = t;  // (not accounting for frame time here)
      instr1.frameNStart = frameN;  // exact frame index
      
      instr1.setAutoDraw(true);
    }

    
    // *contButton1* updates
    if (t >= 0.0 && contButton1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contButton1.tStart = t;  // (not accounting for frame time here)
      contButton1.frameNStart = frameN;  // exact frame index
      
      contButton1.setAutoDraw(true);
    }

    // *clickCont1* updates
    if (t >= 0.0 && clickCont1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickCont1.tStart = t;  // (not accounting for frame time here)
      clickCont1.frameNStart = frameN;  // exact frame index
      
      clickCont1.status = PsychoJS.Status.STARTED;
      prevButtonState = clickCont1.getPressed();  // if button is down already this ISN'T a new click
      }
    if (clickCont1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = clickCont1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [contButton1]) {
            if (obj.contains(clickCont1)) {
              gotValidClick = true;
              clickCont1.clicked_name.push(obj.name)
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


var boxes_seen;
var objs;
var clicked_boxes;
var click_times;
var obj_i;
var correct_boxes;
var initial_reveal;
var showing_obj;
var showing_blank;
var update_time_elapsed;
var show_continue;
var show_end;
var trial_stop;
var clicked_obj;
var obj_count;
var task_time_start;
var task_time_click;
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
    contButton2.setPos(OFFSCREEN);
    // setup some python lists for storing info about the clickCont2
    clickCont2.clicked_name = [];
    gotValidClick = false; // until a click is received
    clickCont2.mouseClock.reset();
    headText.setText(trial_name);
    if (terminate_experiment) {
        continueRoutine = false;
    }
    util.shuffle(objs6);
    util.shuffle(idxs8);
    boxes_seen = [true, true, true, true, true, true, true, true];
    objs = [null, null, null, null, null, null, null, null];
    clicked_boxes = [];
    click_times = [];
    obj_i = 0;
    correct_boxes = [];
    for (var idx, _pj_c = 0, _pj_a = idxs8.slice(0, n_fruits), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        idx = _pj_a[_pj_c];
        objs[idx] = objs6[obj_i];
        objs[idx].setPos(BOX_POS[idx], {"log": false});
        obj_i += 1;
        boxes_seen[idx] = false;
        correct_boxes.push(`box${(idx + 1)}`);
    }
    correct_boxes.sort();
    initial_reveal = true;
    showing_obj = false;
    showing_blank = false;
    update_time_elapsed = false;
    show_continue = false;
    show_end = false;
    trial_stop = false;
    clicked_obj = null;
    obj_count = 0;
    task_time_start = null;
    task_time_click = 0;
    task_time_elapsed = 0;
    
    // keep track of which components have finished
    part1Components = [];
    part1Components.push(box1);
    part1Components.push(box2);
    part1Components.push(box3);
    part1Components.push(box4);
    part1Components.push(box5);
    part1Components.push(box6);
    part1Components.push(box7);
    part1Components.push(box8);
    part1Components.push(highlighter);
    part1Components.push(blank);
    part1Components.push(contButton2);
    part1Components.push(endButton2);
    part1Components.push(clickCont2);
    part1Components.push(debugTimer);
    part1Components.push(headText);
    
    for (const thisComponent of part1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function part1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'part1'-------
    // get current time
    t = part1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *box1* updates
    if (t >= 0.0 && box1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box1.tStart = t;  // (not accounting for frame time here)
      box1.frameNStart = frameN;  // exact frame index
      
      box1.setAutoDraw(true);
    }

    
    // *box2* updates
    if (t >= 0.0 && box2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box2.tStart = t;  // (not accounting for frame time here)
      box2.frameNStart = frameN;  // exact frame index
      
      box2.setAutoDraw(true);
    }

    
    // *box3* updates
    if (t >= 0.0 && box3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box3.tStart = t;  // (not accounting for frame time here)
      box3.frameNStart = frameN;  // exact frame index
      
      box3.setAutoDraw(true);
    }

    
    // *box4* updates
    if (t >= 0.0 && box4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box4.tStart = t;  // (not accounting for frame time here)
      box4.frameNStart = frameN;  // exact frame index
      
      box4.setAutoDraw(true);
    }

    
    // *box5* updates
    if (t >= 0.0 && box5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box5.tStart = t;  // (not accounting for frame time here)
      box5.frameNStart = frameN;  // exact frame index
      
      box5.setAutoDraw(true);
    }

    
    // *box6* updates
    if (t >= 0.0 && box6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box6.tStart = t;  // (not accounting for frame time here)
      box6.frameNStart = frameN;  // exact frame index
      
      box6.setAutoDraw(true);
    }

    
    // *box7* updates
    if (t >= 0.0 && box7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box7.tStart = t;  // (not accounting for frame time here)
      box7.frameNStart = frameN;  // exact frame index
      
      box7.setAutoDraw(true);
    }

    
    // *box8* updates
    if (t >= 0.0 && box8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box8.tStart = t;  // (not accounting for frame time here)
      box8.frameNStart = frameN;  // exact frame index
      
      box8.setAutoDraw(true);
    }

    
    // *highlighter* updates
    if (t >= 0.0 && highlighter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      highlighter.tStart = t;  // (not accounting for frame time here)
      highlighter.frameNStart = frameN;  // exact frame index
      
      highlighter.setAutoDraw(true);
    }

    
    // *blank* updates
    if (t >= 0.0 && blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank.tStart = t;  // (not accounting for frame time here)
      blank.frameNStart = frameN;  // exact frame index
      
      blank.setAutoDraw(true);
    }

    
    // *contButton2* updates
    if ((show_continue) && contButton2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contButton2.tStart = t;  // (not accounting for frame time here)
      contButton2.frameNStart = frameN;  // exact frame index
      
      contButton2.setAutoDraw(true);
    }

    
    // *endButton2* updates
    if ((show_end) && endButton2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endButton2.tStart = t;  // (not accounting for frame time here)
      endButton2.frameNStart = frameN;  // exact frame index
      
      endButton2.setAutoDraw(true);
    }

    // *clickCont2* updates
    if (t >= 0.0 && clickCont2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickCont2.tStart = t;  // (not accounting for frame time here)
      clickCont2.frameNStart = frameN;  // exact frame index
      
      clickCont2.status = PsychoJS.Status.STARTED;
      prevButtonState = clickCont2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (clickCont2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = clickCont2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [contButton2, endButton2]) {
            if (obj.contains(clickCont2)) {
              gotValidClick = true;
              clickCont2.clicked_name.push(obj.name)
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
    
    // *headText* updates
    if (t >= 0.0 && headText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      headText.tStart = t;  // (not accounting for frame time here)
      headText.frameNStart = frameN;  // exact frame index
      
      headText.setAutoDraw(true);
    }

    if (update_time_elapsed) {
        task_time_elapsed = (t - task_time_start);
    }
    if (trial_stop) {
    } else {
        if ((show_continue || show_end)) {
            apply(boxes, (x) => {
        return x.setAutoDraw(false, {"log": false});
    });
            offscreen([blank, highlighter]);
            if (show_continue) {
                contButton2.setPos([0.0, (- 0.4)], {"log": false});
            } else {
                endButton2.setPos([0.0, 0.0], {"log": false});
            }
            trial_stop = true;
        } else {
            if (initial_reveal) {
                apply(objs, (x) => {
        return x.draw();
    });
                if ((t > reveal_seconds)) {
                    apply(objs, (x) => {
        return x.setAutoDraw(false, {"log": false});
    });
                    initial_reveal = false;
                    task_time_start = t;
                    update_time_elapsed = true;
                }
            } else {
                if (showing_obj) {
                    clicked_obj.draw();
                    if (((t - task_time_click) >= OBJ_DURATION)) {
                        clicked_obj.setAutoDraw(false, {"log": false});
                        showing_obj = false;
                        if ((obj_count >= n_fruits)) {
                            show_continue = true;
                            consec_errors = 0;
                        }
                    }
                } else {
                    if (showing_blank) {
                        blank.draw();
                        if (((t - task_time_click) >= BLANK_DURATION)) {
                            showing_blank = false;
                            consec_errors += 1;
                            if ((consec_errors >= 3)) {
                                show_end = true;
                            } else {
                                show_continue = true;
                            }
                        }
                    } else {
                        offscreen([blank, highlighter]);
                        for (var i, _pj_c = 0, _pj_a = util.range(8), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                            i = _pj_a[_pj_c];
                            if (clickCont2.isPressedIn(boxes[i])) {
                                if (boxes_seen[i]) {
                                    blank.setPos(boxes[i].pos, {"log": false});
                                    showing_blank = true;
                                    update_time_elapsed = false;
                                } else {
                                    clicked_obj = objs[i];
                                    boxes_seen[i] = true;
                                    obj_count += 1;
                                    showing_obj = true;
                                    if ((obj_count >= n_fruits)) {
                                        update_time_elapsed = false;
                                    }
                                }
                                clicked_boxes.push(boxes[i].name);
                                click_times.push(task_time_elapsed);
                                task_time_click = t;
                                break;
                            } else {
                                if (boxes[i].contains(clickCont2)) {
                                    highlighter.setPos(boxes[i].pos, {"log": false});
                                    highlighter.draw();
                                    break;
                                }
                            }
                        }
                    }
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
    // store data for psychoJS.experiment (ExperimentHandler)
    if ((! terminate_experiment)) {
        psychoJS.experiment.addData("clicked_boxes", clicked_boxes);
        psychoJS.experiment.addData("click_times", click_times);
        psychoJS.experiment.addData("time_taken_sec", click_times.pop());
        psychoJS.experiment.addData("correct_boxes", correct_boxes);
        psychoJS.experiment.addData("consec_errors", consec_errors);
    }
    if ((consec_errors >= 3)) {
        terminate_experiment = true;
    }
    
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
