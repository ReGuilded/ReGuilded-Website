WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.Services.AddServerSideBlazor();
builder.Services.AddRazorPages();
builder.Services.AddLocalization();
builder.Services.AddControllers();
builder.Services.AddHttpContextAccessor();

WebApplication app = builder.Build();

var supportedCultures = builder.Configuration.GetSection("SupportedCultures").Get<string[]>();
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
app.UseEndpoints(endpoints => {
    endpoints.MapGet("/links/guilded",
                     async context => {
                         context.Response.Redirect(builder.Configuration.GetSection("Socials").GetValue<string>("Guilded"));
                     });
    endpoints.MapGet("/links/twitter",
                     async context => {
                         context.Response.Redirect(builder.Configuration.GetSection("Socials").GetValue<string>("Twitter"));
                     });
    endpoints.MapGet("/links/reddit",
                     async context => {
                         context.Response.Redirect(builder.Configuration.GetSection("Socials").GetValue<string>("Reddit"));
                     });
    endpoints.MapGet("/links/github",
                     async context => {
                         context.Response.Redirect(builder.Configuration.GetSection("Socials").GetValue<string>("GitHub"));
                     });
    endpoints.MapGet("/donate",
                     async context => {
                         context.Response.Redirect(builder.Configuration.GetSection("Socials").GetValue<string>("KoFi"));
                     });
    endpoints.MapGet("/subscribe",
                     async context => {
                         context.Response.Redirect(builder.Configuration.GetSection("Socials").GetValue<string>("Guilded-Subscriptions"));
                     });
    
    endpoints.MapGet("/addons",
                     async context => {
                         context.Response.Redirect("/enhancements?=addons");
                     });
    endpoints.MapGet("/plugins",
                     async context => {
                         context.Response.Redirect("/enhancements?=addons");
                     });
    endpoints.MapGet("/themes",
                     async context => {
                         context.Response.Redirect("/enhancements?=themes");
                     });
    endpoints.MapGet("/sound-packs",
                     async context => {
                         context.Response.Redirect("/enhancements?=sound-packs");
                     });
});

await app.RunAsync().ConfigureAwait(false);