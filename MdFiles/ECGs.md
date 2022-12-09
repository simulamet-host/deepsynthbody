---
title: 'ECGs'
category: 'Cardiovascular'
#subcategory: 'Sub Cardiovascular1'
# subsubcategory: 'Subsub Cardiovascular'
desc: 'A generative model to generate deepsynth ECG images.'
thumbnail: https://st4.depositphotos.com/38951590/41607/v/600/depositphotos_416070486-stock-illustration-heart-beat-black-background.jpg
publication: https://ieeexplore.ieee.org/abstract/document/9462062
show: true
---

## Generating DeepFake ECGs with 8-leads.

```bash
import deepsynthbody.cardiovascular.ecg as ecg

help(ecg.generate)

Help on function generate in module deepsynthbody.cardiovascular.ecg.functions:

generate(num_ecg, out_dir, start_id=0, device='cpu', **kwargs)
    Generate DeepFake 12-leads 10-sec long ECG.
    
    Parameters
    ----------------
    num_ecg: int
        Number of DeepFake ECGs to generate randomly.
    out_dir: str
        A directory to save output files with extension ".asc". 
    start_id: int 
        A interger number to start file names. Default value is 0.and
    device: str
        A device to run the generator. Use strin "cpu" to run on CPU and "cuda" to run on a GPU. 
    
    Return
    ------
    None
        No return value.

# Run on CPU (default setting)
ecg.generate(5, ".", start_id=0, device="cpu") # Generate 5 ECGs to the current folder starting from id=0

# Run on GPU 
ecg.generate(5, ".", start_id=0, device="cuda") # Generate 5 ECGs to the current folder starting from id=0
```
The generator functions can generate DeepFake ECGs with 8-lead values [lead names from first coloum to eighth colum: ‘I’,’II’,’V1’,’V2’,’V3’,’V4’,’V5’,’V6’] for 10s (5000 values per lead). These 8-leads format can be converted to 12-leads format using the following equations.

```bash
lead III value = (lead II value) - (lead I value)
lead aVR value = -0.5*(lead I value + lead II value)
lead aVL value = lead I value - 0.5 * lead II value
lead aVF value = lead II value - 0.5 * lead I value
```

## Generated DeepFake ECG
<img src="https://deepsynthbody.org/images/ecg_fake.png" width="800" />

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## For more details: 
Please contact: vajira@simula.no, michael@simula.no

## License
[MIT](https://choosealicense.com/licenses/mit/)