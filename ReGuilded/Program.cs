WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.Services.AddServerSideBlazor();
builder.Services.AddRazorPages();
builder.Services.AddLocalization();
builder.Services.AddControllers();

WebApplication app = builder.Build();

var supportedCultures = new[] { "en-US", "fr-FR" };
var localizationOptions = new RequestLocalizationOptions().SetDefaultCulture(supportedCultures[0])
                                                          .AddSupportedCultures(supportedCultures)
                                                          .AddSupportedUICultures(supportedCultures);

app.UseRequestLocalization(localizationOptions);

if (app.Environment.IsDevelopment()) app.UseDeveloperExceptionPage();
else app.UseExceptionHandler("/Error").UseHsts();

app
    .UseHttpsRedirection()
    .UseStaticFiles()
    .UseRouting();

app.MapControllers();
app.MapBlazorHub();
app.MapFallbackToPage("/_Host");

await app.RunAsync().ConfigureAwait(false);