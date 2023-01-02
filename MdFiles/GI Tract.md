---
title: 'GI Tract'
category: 'Digestive'
#subcategory: 'Sub Cardiovascular1'
# subsubcategory: 'Subsub Cardiovascular'
desc: 'A generative model to generate deepsynth GI tract images.'
thumbnail: /digestiveImages/GITract.jpeg
publication: https://ieeexplore.ieee.org/abstract/document/9462062
show: true
---

# Digestive.GItract
### How to generate random samples?

```bash
pip install deepsynthbody
```

```bash
import deepsynthbody.digestive.gitract as gi

>> help(gi.generate)
'''
Help on function generate in module deepsynthbody.digestive.gitract.functions:

generate(name, result_dir, checkpoint_dir, num_img_per_tile, num_of_outputs, trunc_psi=0.75, **kwargs)
    Generate deepfake Gastrointestinal tract images.
    
    Keyword arguments:
    name -- Any name to keep trac of generations
    result_dir -- A directory to save output
    checkpoint_dir -- A directory to download pre-trained checkpoints
    num_img_per_tile -- Number of images per dimenstion of the grid
    num_of_outputs -- Number of outputs to generate
    trunc_psi -- value between 0.5 and 1.0 (default 0.75)
'''

>> gi.generate("test_data", "./result_dir", "./checkpoints", 
            num_img_per_tile = 1, 
            num_of_outputs= 10, trunc_psi=0.75) 
```


## Random sample generated from deepsynthbody.digestive.gitract.generate()
<img src="/digestiveImages/generated_polyps_style_gan.png" width="800" />

### How to generate interpolated samples between random samples?

```bash
import deepsynthbody.digestive.gitract as gi

>> help(gi.generate_interpolation)
'''
Help on function generate_interpolation in module deepsynthbody.digestive.gitract.functions:

generate_interpolation(name, result_dir, checkpoint_dir, num_img_per_tile, num_of_outputs, num_of_steps_to_interpolate, save_frames, trunc_psi=0.75, **kwargs)
    Generate deepfake Gastrointestinal tract images.
    
    Keyword arguments:
    name -- Any name to keep trac of generations
    result_dir -- A directory to save output
    checkpoint_dir -- A directory to download pre-trained checkpoints
    num_img_per_tile -- Number of images per dimenstion of the grid
    num_of_outputs -- Number of outputs to generate
    num_of_steps_to_interpolate -- Number of step between two random points
    save_frames -- True if you want frame by frame, otherwise .gif will be generated
    trunc_psi -- value between 0.5 and 1.0 (default 0.75)
'''

>> gi.generate_interpolation("test_data", "./result_dir", "./checkpoints",
                        num_img_per_tile=1,
                        num_of_outputs=1,
                        save_frames=True,
                        num_of_steps_to_interpolate=100,seed=100)
```

### Random sample generated from deepsynthbody.digestive.gitract.generate_interpolation()
<img src="/digestiveImages/interpolation_samples.png" width="800" />

### Reference for this implementation:

```bash
@article{Karras2019stylegan2,
  title   = {Analyzing and Improving the Image Quality of {StyleGAN}},
  author  = {Tero Karras and Samuli Laine and Miika Aittala and Janne Hellsten and Jaakko Lehtinen and Timo Aila},
  journal = {CoRR},
  volume  = {abs/1912.04958},
  year    = {2019},
}

@article{zhao2020diffaugment,
    title   = {Differentiable Augmentation for Data-Efficient GAN Training},
    author  = {Zhao, Shengyu and Liu, Zhijian and Lin, Ji and Zhu, Jun-Yan and Han, Song},
    journal = {arXiv preprint arXiv:2006.10738},
    year    = {2020}
}

@misc{karras2020training,
    title   = {Training Generative Adversarial Networks with Limited Data},
    author  = {Tero Karras and Miika Aittala and Janne Hellsten and Samuli Laine and Jaakko Lehtinen and Timo Aila},
    year    = {2020},
    eprint  = {2006.06676},
    archivePrefix = {arXiv},
    primaryClass = {cs.CV}
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## For more details: 
Please contact: vajira@simula.no, michael@simula.no

## License
[MIT](https://choosealicense.com/licenses/mit/)