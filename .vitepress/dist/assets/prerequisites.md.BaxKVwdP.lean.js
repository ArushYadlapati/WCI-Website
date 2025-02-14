import{_ as e,c as t,a0 as a,o as i}from"./chunks/framework.D5XSuxOt.js";const k=JSON.parse('{"title":"Prerequisites for Pedro Pathing","description":"","frontmatter":{},"headers":[],"relativePath":"prerequisites.md","filePath":"prerequisites.md"}'),n={name:"prerequisites.md"};function o(h,s,l,r,d,c){return i(),t("div",null,s[0]||(s[0]=[a('<h1 id="prerequisites-for-pedro-pathing" tabindex="-1">Prerequisites for Pedro Pathing <a class="header-anchor" href="#prerequisites-for-pedro-pathing" aria-label="Permalink to &quot;Prerequisites for Pedro Pathing&quot;">​</a></h1><h2 id="robot-and-drive-type" tabindex="-1">Robot and Drive Type <a class="header-anchor" href="#robot-and-drive-type" aria-label="Permalink to &quot;Robot and Drive Type&quot;">​</a></h2><p>Pedro Pathing is designed to work with <strong>omnidirectional drives</strong>, such as <strong>mecanum drive</strong>. Currently, there is no support for swerve drives.</p><h2 id="project-setup" tabindex="-1">Project Setup <a class="header-anchor" href="#project-setup" aria-label="Permalink to &quot;Project Setup&quot;">​</a></h2><h4 id="_1-if-you-want-to-use-the-quickstart-clone-it-https-github-com-pedro-pathing-quickstart-git-then-move-on-to-constants-setup" tabindex="-1">1. If you want to use the quickstart, clone it: <code>https://github.com/Pedro-Pathing/Quickstart.git</code>. Then move on to <a href="#constants-setup">Constants Setup.</a> <a class="header-anchor" href="#_1-if-you-want-to-use-the-quickstart-clone-it-https-github-com-pedro-pathing-quickstart-git-then-move-on-to-constants-setup" aria-label="Permalink to &quot;1. If you want to use the quickstart, clone it: ```https://github.com/Pedro-Pathing/Quickstart.git```. Then move on to [Constants Setup.](#constants-setup)&quot;">​</a></h4><h4 id="_2-if-you-want-to-add-pedro-to-your-existing-repository-add-these-two-to-your-repositories-block-in-build-dependencies-gradle" tabindex="-1">2. If you want to add Pedro to your existing repository, add these two to your <code>repositories{}</code> block in <code>build.dependencies.gradle</code>: <a class="header-anchor" href="#_2-if-you-want-to-add-pedro-to-your-existing-repository-add-these-two-to-your-repositories-block-in-build-dependencies-gradle" aria-label="Permalink to &quot;2. If you want to add Pedro to your existing repository, add these two to your `repositories{}` block in `build.dependencies.gradle`:&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    maven { url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://maven.brott.dev/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    maven { url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://maven.pedropathing.com/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><h4 id="_3-then-add-these-two-to-your-dependencies-block-in-build-dependencies-gradle" tabindex="-1">3. Then add these two to your <code>dependencies{}</code> block in <code>build.dependencies.gradle</code>: <a class="header-anchor" href="#_3-then-add-these-two-to-your-dependencies-block-in-build-dependencies-gradle" aria-label="Permalink to &quot;3. Then add these two to your `dependencies{}` block in `build.dependencies.gradle`:&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    implementation </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;com.pedropathing:pedro:[VERSION]&#39;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    implementation </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;com.acmerobotics.dashboard:dashboard:0.4.16&#39;</span></span></code></pre></div><h4 id="_4-below-there-is-the-latest-version-of-pedro-replace-version-with-it" tabindex="-1">4. Below, there is the latest version of Pedro, replace [VERSION] with it. <a class="header-anchor" href="#_4-below-there-is-the-latest-version-of-pedro-replace-version-with-it" aria-label="Permalink to &quot;4. Below, there is the latest version of Pedro, replace [VERSION] with it.&quot;">​</a></h4><p><img src="https://img.shields.io/badge/dynamic/xml?url=https%3A%2F%2Fpedro-pathing.github.io%2Fmaven.pedropathing.com%2Fcom%2Fpedropathing%2Fpedro%2Fmaven-metadata.xml&amp;query=%2Fmetadata%2Fversioning%2Flatest&amp;style=for-the-badge&amp;label=Build&amp;labelColor=111111&amp;color=7b39ab" alt="Latest Pedro Version"></p><h4 id="_5-lastly-you-will-have-to-create-a-pedropathing-package-within-this-you-will-store-the-tuners-and-your-two-constants-files-download-the-tuners-from-the-pedro-pathing-quickstart-place-the-tuners-into-your-package-and-then-continue-to-learn-how-to-setup-your-constants-files" tabindex="-1">5. Lastly, you will have to create a <code>PedroPathing</code> package. Within this you will store the tuners and your two constants files. Download the tuners from the <a href="https://github.com/Pedro-Pathing/Quickstart" target="_blank" rel="noreferrer">Pedro Pathing Quickstart</a>. Place the tuners into your package and then continue to learn how to setup your <code>constants</code> files. <a class="header-anchor" href="#_5-lastly-you-will-have-to-create-a-pedropathing-package-within-this-you-will-store-the-tuners-and-your-two-constants-files-download-the-tuners-from-the-pedro-pathing-quickstart-place-the-tuners-into-your-package-and-then-continue-to-learn-how-to-setup-your-constants-files" aria-label="Permalink to &quot;5. Lastly, you will have to create a `PedroPathing` package. Within this you will store the tuners and your two constants files. Download the tuners from the [Pedro Pathing Quickstart](https://github.com/Pedro-Pathing/Quickstart). Place the tuners into your package and then continue to learn how to setup your `constants` files.&quot;">​</a></h4><h2 id="constants-setup" tabindex="-1">Constants Setup <a class="header-anchor" href="#constants-setup" aria-label="Permalink to &quot;Constants Setup&quot;">​</a></h2><p><strong>Note:</strong> If you are <em><strong>not</strong></em> using the quickstart and <em><strong>not</strong></em> uses the names <code>LConstants</code> and <code>FConstants</code> , you will have to adapt the tuners by inputting your classes that have the <code>static{}</code> blocks into the PoseUpdater or into the Follower, depending on which one the tuner/test uses.</p><p>This is <strong>NOT</strong> recommended, as it is much easier to use the same class names as the quickstart.</p><h6 id="in-these-docs-we-will-refer-to-the-class-that-modifies-the-followerconstants-as-fconstants-and-the-class-that-modifies-the-specific-localizer-s-constants-as-lconstants" tabindex="-1">In these docs, we will refer to the class that modifies the <code>FollowerConstants</code> as <code>FConstants</code> and the class that modifies the specific localizer&#39;s constants as <code>LConstants</code>. <a class="header-anchor" href="#in-these-docs-we-will-refer-to-the-class-that-modifies-the-followerconstants-as-fconstants-and-the-class-that-modifies-the-specific-localizer-s-constants-as-lconstants" aria-label="Permalink to &quot;In these docs, we will refer to the class that modifies the `FollowerConstants` as `FConstants` and the class that modifies the specific localizer&#39;s constants as `LConstants`.&quot;">​</a></h6><h4 id="_1-there-are-default-values-saved-within-the-library-you-override-them-by-changing-their-values-in-the-static-block-in-for-example-lconstants-or-fconstants-these-docs-will" tabindex="-1">1. There are default values saved within the library, you override them by changing their values in the <code>static {}</code> block in, for example, <code>LConstants</code> or <code>FConstants</code>. These docs will <a class="header-anchor" href="#_1-there-are-default-values-saved-within-the-library-you-override-them-by-changing-their-values-in-the-static-block-in-for-example-lconstants-or-fconstants-these-docs-will" aria-label="Permalink to &quot;1. There are default values saved within the library, you override them by changing their values in the ```static {}``` block in, for example, ```LConstants``` or ```FConstants```. These docs will&quot;">​</a></h4><h4 id="_2-create-a-class-that-has-a-static-block-to-modify-our-followerconstants-class-this-will-be-refered-to-as-fconstants" tabindex="-1">2. Create a Class that has a static block to modify our <code>FollowerConstants</code> class. This will be refered to as <code>FConstants</code>. <a class="header-anchor" href="#_2-create-a-class-that-has-a-static-block-to-modify-our-followerconstants-class-this-will-be-refered-to-as-fconstants" aria-label="Permalink to &quot;2. Create a Class that has a static block to modify our `FollowerConstants` class. This will be refered to as `FConstants`.&quot;">​</a></h4><h4 id="_3-we-need-to-make-sure-to-select-our-localizer-type-from-the-localizers-enum" tabindex="-1">3. We need to make sure to select our localizer type from the Localizers enum. <a class="header-anchor" href="#_3-we-need-to-make-sure-to-select-our-localizer-type-from-the-localizers-enum" aria-label="Permalink to &quot;3. We need to make sure to select our localizer type from the Localizers enum.&quot;">​</a></h4><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This acts as a method of updating FollowerConstants without direct access to it.</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FConstants { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This is how we change Follower Constants.</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Select our localizer</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        FollowerConstants.localizers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Localizers.THREE_WHEEL;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // We can change the value of any variable/constant of FollowerConstants.</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        FollowerConstants.mass </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// In kg</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="_4-then-we-need-to-create-another-class-with-a-static-block-to-modify-our-specific-localizer-s-constants-this-will-be-refered-to-as-lconstants" tabindex="-1">4. Then, we need to create another class with a static block to modify our specific localizer&#39;s constants. This will be refered to as <code>LConstants</code>. <a class="header-anchor" href="#_4-then-we-need-to-create-another-class-with-a-static-block-to-modify-our-specific-localizer-s-constants-this-will-be-refered-to-as-lconstants" aria-label="Permalink to &quot;4. Then, we need to create another class with a static block to modify our specific localizer&#39;s constants. This will be refered to as `LConstants`.&quot;">​</a></h4><h4 id="_5-we-need-to-change-the-values-for-the-localizer-in-each-localizer-s-page-there-will-be-a-set-of-default-values-that-you-can-copy-these-are-the-default-values-provided-in-the-quickstart" tabindex="-1">5. We need to change the values for the localizer. In each localizer&#39;s page, there will be a set of default values that you can copy. These are the default values provided in the quickstart: <a class="header-anchor" href="#_5-we-need-to-change-the-values-for-the-localizer-in-each-localizer-s-page-there-will-be-a-set-of-default-values-that-you-can-copy-these-are-the-default-values-provided-in-the-quickstart" aria-label="Permalink to &quot;5. We need to change the values for the localizer. In each localizer&#39;s page, there will be a set of default values that you can copy. These are the default values provided in the quickstart:&quot;">​</a></h4><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This acts as a method of updating ThreeWheelConstants without direct access to it.</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LConstants { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This is how we change ThreeWheelConstants.</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ThreeWheelConstants.forwardTicksToInches </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> .001989436789</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ThreeWheelConstants.strafeTicksToInches </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> .001989436789</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ThreeWheelConstants.turnTicksToInches </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> .001989436789</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ThreeWheelConstants.leftY </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ThreeWheelConstants.rightY </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ThreeWheelConstants.strafeX </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ThreeWheelConstants.leftEncoder_HardwareMapName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;leftFront&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ThreeWheelConstants.rightEncoder_HardwareMapName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;rightRear&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ThreeWheelConstants.strafeEncoder_HardwareMapName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;rightFront&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ThreeWheelConstants.leftEncoderDirection </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Encoder.REVERSE;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ThreeWheelConstants.rightEncoderDirection </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Encoder.REVERSE;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ThreeWheelConstants.strafeEncoderDirection </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Encoder.FORWARD;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="_6-make-sure-when-you-are-creating-opmodes-to-follow-the-guidelines-that-constants-sets-down" tabindex="-1">6. Make sure when you are creating opmodes to follow the guidelines that <a href="./misc/constantsuser.html">Constants</a> sets down. <a class="header-anchor" href="#_6-make-sure-when-you-are-creating-opmodes-to-follow-the-guidelines-that-constants-sets-down" aria-label="Permalink to &quot;6. Make sure when you are creating opmodes to follow the guidelines that [Constants](./misc/constantsuser.md) sets down.&quot;">​</a></h4>',24)]))}const u=e(n,[["render",o]]);export{k as __pageData,u as default};
