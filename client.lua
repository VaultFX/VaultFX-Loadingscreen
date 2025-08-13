-- Client script to handle loading screen visibility

-- When the resource starts
AddEventHandler('onClientResourceStart', function(resourceName)
    if (GetCurrentResourceName() ~= resourceName) then
        return
    end
    
    -- Listen for character selection
    RegisterNetEvent('vorp:characterSelected')
    AddEventHandler('vorp:characterSelected', function()
        -- Send message to NUI to hide the loading screen
        SendNUIMessage({
            type = 'CHARACTER_SELECTED'
        })
    end)
end)
