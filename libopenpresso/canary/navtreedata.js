/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Libopenpresso", "index.html", [
    [ "Project overview", "index.html#autotoc_md5", null ],
    [ "Features", "index.html#autotoc_md6", null ],
    [ "Getting started", "index.html#autotoc_md7", null ],
    [ "Quick Start", "md_quick__start.html", [
      [ "Prerequisites", "md_quick__start.html#autotoc_md9", null ],
      [ "Installation", "md_quick__start.html#autotoc_md11", [
        [ "Option 1: Conan (Recommended)", "md_quick__start.html#autotoc_md12", null ],
        [ "Option 2: CMake FetchContent (Simplest)", "md_quick__start.html#autotoc_md13", null ]
      ] ],
      [ "Basic Usage", "md_quick__start.html#autotoc_md15", [
        [ "1. Configure Components", "md_quick__start.html#autotoc_md16", null ],
        [ "2. Initialize Core", "md_quick__start.html#autotoc_md17", null ],
        [ "3. Perform brew", "md_quick__start.html#autotoc_md18", null ]
      ] ],
      [ "Advanced Usage", "md_quick__start.html#autotoc_md20", null ],
      [ "What's Next?", "md_quick__start.html#autotoc_md22", null ]
    ] ],
    [ "Installation", "md_installation.html", [
      [ "Conan package (preferred)", "md_installation.html#install-with-conan", null ],
      [ "CMake FetchContent", "md_installation.html#install-cmake-fetchcontent", null ],
      [ "CMake subdirectory", "md_installation.html#install-cmake-subdirectory", null ],
      [ "Precompiled binaries", "md_installation.html#install-prebuilt-binaries", null ],
      [ "Build from sources", "md_installation.html#install-build-from-sources", null ]
    ] ],
    [ "Device Configuration", "device_config.html", [
      [ "Overview", "device_config.html#autotoc_md30", null ],
      [ "The Components Map", "device_config.html#autotoc_md32", null ],
      [ "Understanding Dependencies", "device_config.html#autotoc_md34", null ],
      [ "Component overview", "device_config.html#autotoc_md36", [
        [ "High-Level Automation", "device_config.html#autotoc_md37", [
          [ "BrewProfiler", "device_config.html#autotoc_md38", null ],
          [ "SteamControllerConfig", "device_config.html#autotoc_md39", null ]
        ] ],
        [ "Controllers", "device_config.html#autotoc_md41", [
          [ "TemperaturePidControllerConfig", "device_config.html#temperature-controller-config", null ],
          [ "PulsePressureControllerConfig", "device_config.html#pressure-controller-config", null ]
        ] ],
        [ "Sensors", "device_config.html#autotoc_md43", [
          [ "Pressure: Ads1115PressureSensorConfig", "device_config.html#autotoc_md44", null ],
          [ "Temperature Sensors", "device_config.html#autotoc_md45", null ],
          [ "Weight Sensors", "device_config.html#autotoc_md46", null ]
        ] ],
        [ "Logical Inputs &amp; Outputs", "device_config.html#autotoc_md48", [
          [ "LogicalInputPinConfig", "device_config.html#autotoc_md49", null ],
          [ "LogicalOutputPinConfig", "device_config.html#autotoc_md50", null ]
        ] ]
      ] ],
      [ "Watchdog Configuration", "device_config.html#autotoc_md52", null ],
      [ "Complete Example", "device_config.html#autotoc_md54", null ],
      [ "See Also", "device_config.html#autotoc_md56", null ]
    ] ],
    [ "API Usage", "md_usage.html", [
      [ "LibopenpressoCore &amp; Component Access", "md_usage.html#autotoc_md58", [
        [ "Lazy Factory Pattern", "md_usage.html#autotoc_md59", null ]
      ] ],
      [ "Lifetime Management", "md_usage.html#autotoc_md60", [
        [ "Automatic Cleanup", "md_usage.html#autotoc_md61", null ],
        [ "Controllers deactivation and sensors callbacks unregister", "md_usage.html#autotoc_md62", null ],
        [ "Dependencies", "md_usage.html#autotoc_md63", null ],
        [ "Safe Core Destruction", "md_usage.html#autotoc_md64", null ],
        [ "Callback Resource Safety", "md_usage.html#autotoc_md65", null ]
      ] ],
      [ "Thread Safety", "md_usage.html#autotoc_md66", [
        [ "LibopenpressoCore", "md_usage.html#autotoc_md67", null ],
        [ "Sensors", "md_usage.html#autotoc_md68", null ],
        [ "Controllers", "md_usage.html#autotoc_md69", null ]
      ] ],
      [ "Controller Architecture", "md_usage.html#autotoc_md70", [
        [ "Activation Model", "md_usage.html#autotoc_md71", null ],
        [ "Unique Write Access", "md_usage.html#autotoc_md72", null ],
        [ "Hardware Sharing", "md_usage.html#autotoc_md73", null ]
      ] ]
    ] ],
    [ "PID Tuning", "pid_tuning.html", [
      [ "Overview", "pid_tuning.html#autotoc_md74", null ],
      [ "Configuration Parameters", "pid_tuning.html#autotoc_md75", [
        [ "Standard Terms", "pid_tuning.html#autotoc_md76", null ],
        [ "Advanced Stabilizing Terms", "pid_tuning.html#autotoc_md77", null ],
        [ "Feedforward Terms (Brewing Compensation)", "pid_tuning.html#autotoc_md78", null ]
      ] ],
      [ "Tuning Procedure", "pid_tuning.html#autotoc_md79", [
        [ "Prerequisites", "pid_tuning.html#autotoc_md80", null ],
        [ "Phase 1: Stabilization (Static Heating)", "pid_tuning.html#autotoc_md81", null ],
        [ "Phase 2: Disturbance Rejection (Brewing)", "pid_tuning.html#autotoc_md82", null ]
      ] ],
      [ "Tune for steam mode", "pid_tuning.html#autotoc_md83", null ]
    ] ],
    [ "Internal Flow Tuning", "md_flow__sensor__tuning.html", [
      [ "How it Works", "md_flow__sensor__tuning.html#autotoc_md85", null ],
      [ "Configuration Parameters", "md_flow__sensor__tuning.html#autotoc_md86", null ],
      [ "Tuning Procedure", "md_flow__sensor__tuning.html#autotoc_md87", [
        [ "Phase 1: Zero Backpressure Tuning", "md_flow__sensor__tuning.html#autotoc_md88", null ],
        [ "Phase 2: High Pressure Tuning", "md_flow__sensor__tuning.html#autotoc_md89", null ]
      ] ],
      [ "Accuracy and precision", "md_flow__sensor__tuning.html#autotoc_md90", null ],
      [ "See Also", "md_flow__sensor__tuning.html#autotoc_md91", null ]
    ] ],
    [ "Cross-Compiling", "md_crosscompiling.html", [
      [ "Build environment for cross compilation", "md_crosscompiling.html#autotoc_md93", null ],
      [ "Creation of build profiles", "md_crosscompiling.html#autotoc_md94", null ],
      [ "Generation of CMake Toolchain from conan profile", "md_crosscompiling.html#cross-compiling-conan-install-step", null ],
      [ "Run CMake config and build", "md_crosscompiling.html#autotoc_md95", null ],
      [ "Using prebuilt containers", "md_crosscompiling.html#autotoc_md96", null ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", null ],
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", null ],
        [ "Typedefs", "functions_type.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"md_quick__start.html#autotoc_md9",
"structlibopenpresso_1_1_temperature_pid_controller_config.html#aff65e2fb2119144b5bf937f8b4e218e6"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';