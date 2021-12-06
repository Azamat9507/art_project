from django.db import models

# Create your models here.



class Main(models.Model):
    title = models.CharField(max_length=200, verbose_name='Slider name')
    content = models.CharField(max_length=200, verbose_name='Slider description')
    image = models.ImageField(verbose_name='About image', upload_to='about/')
    def __str__(self):
        return self.title

    class Meta:
        verbose_name = '1.0 Гланый'
        verbose_name_plural = '1.0 Гланый'







class Category(models.Model):
    category_name =models.CharField(max_length=200, verbose_name='Category name')
    def __str__(self):
        return self.category_name

    class Meta:
        verbose_name = '3.1 Категории продуктов'
        verbose_name_plural = '3.1 Категории продуктов'




class Products(models.Model):
    image = models.ImageField(verbose_name='Image About product', upload_to='about/')
    title = models.CharField(max_length=200, verbose_name='About product ')
    name = models.CharField(max_length=200, verbose_name='Name product ')
    client = models.CharField(max_length=200 , verbose_name='Client name ')
    category = models.ManyToManyField(Category)
    description = models.TextField(verbose_name='About_Product description')
    price_list = models.FileField(verbose_name='Upload File price_list')
    date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField()
    video_process = models.CharField(max_length=200 , verbose_name='Process video Product ')
    def __str__(self):
        return self.title

    class Meta:
        verbose_name = '3.0  О продукте'
        verbose_name_plural = '3.0 О продукте'



class Background_image(models.Model):
    image = models.ImageField(verbose_name='Background_images', upload_to='background/')
    products = models.OneToOneField(Products, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f' {id} Background_images'

    class Meta:
        verbose_name = '1.0.1 Background картинка'
        verbose_name_plural = '1.0.1 Background картинка'


class About(models.Model):
    image = models.ImageField(verbose_name='About Image', upload_to='about/')
    name = models.CharField(max_length=200, verbose_name='About title ')
    date_birth = models.CharField(max_length=200, verbose_name='About date_birth ')
    city = models.CharField(max_length=200, verbose_name='About city ')
    art_type = models.CharField(max_length=200, verbose_name='About art_type ')
    interest = models.CharField(max_length=200, verbose_name='About interest ')
    goals = models.CharField(max_length=200, verbose_name='About goals ')
    apps = models.CharField(max_length=200, verbose_name='About apps ')
    hobbies = models.TextField(verbose_name='About hobbies')


class About_question(models.Model):
    questions =models.TextField(verbose_name='About questions')
    answers =models.TextField(verbose_name='About answers')

    def __str__(self):
        return self.questions

    class Meta:
        verbose_name = '2.0 Вопросы'
        verbose_name_plural = '2.0 Вопросы'