---
slug: container-guide
title: Container Management Guide/Troubleshooting
authors: [asterisk]
tags: [containers, settings, blend-settings, new-user]
---

## Intro to the blendOS container manager

The **blendOS container manager**, located in the **blendOS Settings** app, is how you manage containers on blendOS.

:::info

The container manager is **unfinished**, so some features will be missing, this guide will be updated as features are added.

:::

### Using the container manager

Below is an image of the container manager (provided by SvGaming):

![blend-manager](./blend_manager.png)
<div class="gap"></div>

On the top are your **containers**, which act as a sort of distro in a distro. From here you can start, reorder (more on that later), or delete them.

![blend-containers](./blend-containers.png)
<div class="gap"></div>

:::info

Stop/Restart buttons coming soon!

:::

You can also make a **new container** from here, if you want to.

#### Binary assosciations

On the bottom, you'll notice you can make **binary assosications**. These allow you to turn container binaries into normal (suffixless) binaries. (ex. `apt.ubuntu` -> `apt`)  
  
In blendOS, binaries are run like this: `{BINARY_NAME}.{CONTAINER_NAME}` (ex. `apt.ubuntu`). 

But, if we want to run a binary without the stupid suffix, we can use a **Binary assosciation** to make our lives easier. For our example, we want to make `apt.ubuntu` into `apt` and `dnf.fedora` to `dnf`

To use these, put

===============================================================

```
CONTRIBUTIONS AND THANKS
==========================


Thanks to Overwrited for giving me the idea to write this, 
and to SvGaming for the blend-settings picture!
```

<!-- 63 dashes/equals signs is enough to stretch across the viewer, don't use any more. -->
