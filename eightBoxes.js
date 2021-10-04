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
    {'name': 'imgs/strawberry.png', 'path': 'imgs/strawberry.png'},
    {'name': 'conditions.csv', 'path': 'conditions.csv'},
    {'name': 'imgs/banana.png', 'path': 'imgs/banana.png'},
    {'name': 'imgs/watermelon.png', 'path': 'imgs/watermelon.png'},
    {'name': 'imgs/apple.png', 'path': 'imgs/apple.png'},
    {'name': 'imgs/pear.png', 'path': 'imgs/pear.png'},
    {'name': 'imgs/grapes.png', 'path': 'imgs/grapes.png'},
    {'name': 'imgs/continue.png', 'path': 'imgs/continue.png'},
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
var instrPart1;
var contButton;
var clickCont;
var part1Clock;
var DEBUG;
var OBJ_DURATION;
var BLANK_DURATION;
var SHOW_TIMER;
var b;
var BOX_SIZE;
var BOX_FILL_COLOR;
var BOX_LINE_COLOR;
var BOX_OPACITY;
var OBJ_SIZE;
var BLANK_SIZE;
var BOX_POS;
var IMG_SRCS;
var objs6;
var autodraw_all;
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
var exitButton;
var clickExit;
var debugTimer;
var headText;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instrPart1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrPart1',
    text: 'Notes:\n\n- Currently designed for "landscape" screens (16:10 or wider)\n- Blanks changed to a white box with a red "X"\n- Pictures and blanks now show for 3 seconds on click\n- Pictures will move to the sides, blanks will disappear\n- There is a (very inconspicuous) timer near the bottom-right\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: 0.95, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  contButton = new visual.ImageStim({
    win : psychoJS.window,
    name : 'contButton', units : undefined, 
    image : 'imgs/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0.32, 0.112],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  clickCont = new core.Mouse({
    win: psychoJS.window,
  });
  clickCont.mouseClock = new util.Clock();
  // Initialize components for Routine "part1"
  part1Clock = new util.Clock();
  DEBUG = true;
  OBJ_DURATION = 3.0;
  BLANK_DURATION = 3.0;
  SHOW_TIMER = false;
  if (DEBUG) {
      OBJ_DURATION = 1.0;
      BLANK_DURATION = 1.0;
      SHOW_TIMER = true;
  }
  b = 0.1;
  BOX_SIZE = [(2 * b), (2 * b)];
  BOX_FILL_COLOR = "black";
  BOX_LINE_COLOR = "black";
  BOX_OPACITY = 0.3;
  OBJ_SIZE = [(1.8 * b), (1.8 * b)];
  BLANK_SIZE = OBJ_SIZE;
  BOX_POS = [[((- 3) * b), b], [(- b), b], [b, b], [(3 * b), b], [((- 3) * b), (- b)], [(- b), (- b)], [b, (- b)], [(3 * b), (- b)]];
  IMG_SRCS = ["imgs/apple.png", "imgs/banana.png", "imgs/grapes.png", "imgs/pear.png", "imgs/strawberry.png", "imgs/watermelon.png"];
  objs6 = [];
  for (var i, _pj_c = 0, _pj_a = util.range(6), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      objs6.push(new visual.ImageStim({"win": psychoJS.window, "name": `obj${(i + 1)}`, "image": IMG_SRCS[i], "pos": [0, (- 1.0)], "size": OBJ_SIZE}));
  }
  function _autodraw_all(objs, t_f) {
      for (var obj, _pj_c = 0, _pj_a = objs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          obj = _pj_a[_pj_c];
          if ((obj !== null)) {
              obj.setAutoDraw(t_f, {"log": false});
          }
      }
  }
  autodraw_all = _autodraw_all;
  
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
    ori: 0.0, pos: [0, (- 1.0)],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: BOX_OPACITY, depth: -9, interpolate: true,
  });
  
  blank = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blank', units : undefined, 
    image : 'imgs/empty-box.png', mask : undefined,
    ori : 0.0, pos : [0, (- 1.0)], size : BLANK_SIZE,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  exitButton = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exitButton', units : undefined, 
    image : 'imgs/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0.32, 0.112],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  clickExit = new core.Mouse({
    win: psychoJS.window,
  });
  clickExit.mouseClock = new util.Clock();
  debugTimer = new visual.TextStim({
    win: psychoJS.window,
    name: 'debugTimer',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.45)], height: 0.01,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: 0.2,
    depth: -13.0 
  });
  
  headText = new visual.TextStim({
    win: psychoJS.window,
    name: 'headText',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -14.0 
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
    // setup some python lists for storing info about the clickCont
    clickCont.clicked_name = [];
    gotValidClick = false; // until a click is received
    clickCont.mouseClock.reset();
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instrPart1);
    instrComponents.push(contButton);
    instrComponents.push(clickCont);
    
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
    
    // *instrPart1* updates
    if (t >= 0.0 && instrPart1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrPart1.tStart = t;  // (not accounting for frame time here)
      instrPart1.frameNStart = frameN;  // exact frame index
      
      instrPart1.setAutoDraw(true);
    }

    
    // *contButton* updates
    if (t >= 0.0 && contButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contButton.tStart = t;  // (not accounting for frame time here)
      contButton.frameNStart = frameN;  // exact frame index
      
      contButton.setAutoDraw(true);
    }

    // *clickCont* updates
    if (t >= 0.0 && clickCont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickCont.tStart = t;  // (not accounting for frame time here)
      clickCont.frameNStart = frameN;  // exact frame index
      
      clickCont.status = PsychoJS.Status.STARTED;
      prevButtonState = clickCont.getPressed();  // if button is down already this ISN'T a new click
      }
    if (clickCont.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = clickCont.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [contButton]) {
            if (obj.contains(clickCont)) {
              gotValidClick = true;
              clickCont.clicked_name.push(obj.name)
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
var boxes;
var boxes_seen;
var objs;
var obj_i;
var correct_boxes;
var clicked_boxes;
var click_times;
var reveal_all;
var showing_obj;
var showing_blank;
var start_timing;
var end_timing;
var show_exit;
var clicked_obj;
var obj_count;
var task_time_start;
var task_time_click;
var task_time_elapsed;
var n_errors;
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
    headText.text = `Trial: ${trial_name}`;
    idxs = [0, 1, 2, 3, 4, 5, 6, 7];
    util.shuffle(idxs);
    idxs = idxs.slice(0, n_fruits);
    util.shuffle(objs6);
    boxes = [box1, box2, box3, box4, box5, box6, box7, box8];
    boxes_seen = [true, true, true, true, true, true, true, true];
    objs = [null, null, null, null, null, null, null, null];
    obj_i = 0;
    correct_boxes = [];
    for (var idx, _pj_c = 0, _pj_a = idxs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        idx = _pj_a[_pj_c];
        objs[idx] = objs6[obj_i];
        obj_i += 1;
        objs[idx].setPos(BOX_POS[idx], {"log": false});
        boxes_seen[idx] = false;
        correct_boxes.push(`box${(idx + 1)}`);
    }
    correct_boxes.sort();
    clicked_boxes = [];
    click_times = [];
    reveal_all = true;
    showing_obj = false;
    showing_blank = false;
    start_timing = false;
    end_timing = false;
    show_exit = false;
    clicked_obj = null;
    obj_count = 0;
    task_time_start = null;
    task_time_click = 0;
    task_time_elapsed = 0;
    n_errors = 0;
    
    // setup some python lists for storing info about the clickExit
    clickExit.clicked_name = [];
    gotValidClick = false; // until a click is received
    clickExit.mouseClock.reset();
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
    part1Components.push(exitButton);
    part1Components.push(clickExit);
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
    if (reveal_all) {
        blank.setAutoDraw(false, {"log": false});
        highlighter.setAutoDraw(false, {"log": false});
        if ((t <= reveal_seconds)) {
            autodraw_all(objs, true);
        } else {
            autodraw_all(objs, false);
            if ((task_time_start === null)) {
                task_time_start = t;
            }
            reveal_all = false;
        }
    } else {
        if ((! end_timing)) {
            if ((obj_count >= n_fruits)) {
                end_timing = true;
            }
            if (start_timing) {
                task_time_elapsed = (t - task_time_start);
            } else {
                if ((task_time_start !== null)) {
                    start_timing = true;
                }
            }
        }
        if (showing_obj) {
            if (((t - task_time_click) >= OBJ_DURATION)) {
                clicked_obj.setAutoDraw(false, {"log": false});
                showing_obj = false;
                if ((obj_count >= n_fruits)) {
                    show_exit = true;
                }
            }
        } else {
            if (showing_blank) {
                if (((t - task_time_click) >= BLANK_DURATION)) {
                    blank.setAutoDraw(false, {"log": false});
                    showing_blank = false;
                }
            } else {
                if (show_exit) {
                    for (var box, _pj_c = 0, _pj_a = boxes, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                        box = _pj_a[_pj_c];
                        box.setAutoDraw(false, {"log": false});
                    }
                } else {
                    if ((! show_exit)) {
                        blank.setAutoDraw(false, {"log": false});
                        highlighter.setAutoDraw(false, {"log": false});
                        for (var i, _pj_c = 0, _pj_a = util.range(8), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                            i = _pj_a[_pj_c];
                            if (clickExit.isPressedIn(boxes[i])) {
                                if (boxes_seen[i]) {
                                    blank.setPos(BOX_POS[i], {"log": false});
                                    blank.setAutoDraw(true, {"log": false});
                                    showing_blank = true;
                                    n_errors += 1;
                                } else {
                                    clicked_obj = objs[i];
                                    clicked_obj.setAutoDraw(true, {"log": false});
                                    boxes_seen[i] = true;
                                    obj_count += 1;
                                    showing_obj = true;
                                }
                                clicked_boxes.push(boxes[i].name);
                                click_times.push(task_time_elapsed);
                                task_time_click = t;
                                break;
                            } else {
                                if (boxes[i].contains(clickExit)) {
                                    highlighter.setPos(BOX_POS[i], {"log": false});
                                    highlighter.setAutoDraw(true, {"log": false});
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    
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

    
    // *exitButton* updates
    if ((show_exit) && exitButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exitButton.tStart = t;  // (not accounting for frame time here)
      exitButton.frameNStart = frameN;  // exact frame index
      
      exitButton.setAutoDraw(true);
    }

    // *clickExit* updates
    if (t >= 0.0 && clickExit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickExit.tStart = t;  // (not accounting for frame time here)
      clickExit.frameNStart = frameN;  // exact frame index
      
      clickExit.status = PsychoJS.Status.STARTED;
      prevButtonState = clickExit.getPressed();  // if button is down already this ISN'T a new click
      }
    if (clickExit.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = clickExit.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [exitButton]) {
            if (obj.contains(clickExit)) {
              gotValidClick = true;
              clickExit.clicked_name.push(obj.name)
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
    psychoJS.experiment.addData("n_errors", n_errors);
    
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
