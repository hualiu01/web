from bs4 import BeautifulSoup
import logging
from sys import stdout

class InvalidMyBs4ConfigurationError(Exception):
    def __init__(self, msg):
        self.message = msg

class MyBs4Wrapper:
    conf = {
        "parser": "html.parser"
    }
    def __init__(self, conf_overwrite={}, mode='UPDATE'):
        """
        Init a BS4 with optional configuration overwriting

            Parameters:
                conf_overwrite (dict): optional conf to overwrite
                mode (string): options [UPDATE, REPLACE]
            
            Returns:
                soup (bs4.BeautifulSoup): an soup obj
        """
        self.logger = logging.getLogger(name=self.__class__.__name__)
        self.logger.addHandler(logging.StreamHandler(stdout))
        self.logger.info("init MyBs4Wrapper...")
        if mode == 'REPLACE':
            self.conf = conf_overwrite
            self.logger.warn(f"REPLACED default conf with {conf_overwrite}")
        else:
            for k,v in conf_overwrite.items():
                if k in self.conf:
                    self.logger.info(f"overwriting {k} from {self.conf[k]} to {v}")
                    self.conf[k] = v
                else:
                    raise InvalidMyBs4ConfigurationError(f"key {k} is invalid")
        
    
    def parse_local_html(self, fp: str)->BeautifulSoup:
        with open(fp) as fp:
            self.soup = BeautifulSoup(fp, features=self.conf["parser"])
    
    def get_soup_as_pretty_str(self):
        return self.soup.prettify()

    def get_all_img_src(self, src_filter_kw=None):
        imgs = []
        all_figures= self.soup.find_all('img')
        for img in all_figures:
            if 'src' not in img.attrs:
                self.logger.warn(f"{img} does not have attributes")
                continue
            
            img_src = img.attrs['src']
            if not (src_filter_kw and src_filter_kw not in img_src):
                self.logger.info(img_src)
                imgs.append(img_src)
            
        return len(imgs), imgs

    def get_all_text(self):
        return self.soup.get_text()


