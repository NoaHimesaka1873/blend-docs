---
slug: container-guide
title: Container Management Guide/Troubleshooting
authors: [asterisk]
tags: [containers, settings, blend-settings, new-user]
---

## Intro to the blendOS container manager

The **blendOS container manager**, located in the **blendOS Settings** app, is how you will manage containers on blendOS

:::info

The container manager is **unfinished**, so some features will be missing, this guide will be updated as features are added.

:::

### Using the container manager

image goes here
<div class="gap"></div>

Along the top are your **containers**, which act as a sort of distro in a distro. From here you can start, reorder (more on that later), or delete them

:::info

Stop/Restart buttons coming soon!

:::

You can also make a **new container** from here, if you want to.

#### Binary assosciations

On the bottom, you'll notice you can make **binary assosications**. These allow you to symlink container binaries as suffixless binaries. (ex. `apt.ubuntu` -> `apt`)  
  
In blendOS, binaries are run like this: `{BINARY_NAME}.(CONTAINER_NAME}` (ex. `apt.ubuntu`).  

===============================================================

Thanks to Overwrited for giving me the idea to write this and a picture of the new blend-settings!

<!-- 63 dashes/equals signs is enough to stretch across the viewer, don't use any more. -->
